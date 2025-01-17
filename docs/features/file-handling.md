# File handling

Compas also comes with various utilities across the stack to handle files in a
consistent way.

## Generated router & validators

Let's start with looking at the code generators. Here we have the `T.file()`
type to represent files as can be seen in the following examples:

```js
const T = new TypeCreator();
const R = T.router("/");

R.post("/upload")
  .files({
    myFile: T.file(),
  })
  .response({ success: true });

R.get("/download").response(T.file());
```

Files are handled separately by the generator and validators, and are put on
`ctx.validatedFiles` with help from
[formidable](https://www.npmjs.com/package/formidable). In the generated api
clients we generate the correct type (`ReadableStream` or `Blob`) depending on
the context. And allow for setting custom file parsing options
`createBodyParsers` provided by `@compas/server`

## Saving files

`@compas/store` comes with
[Postgres and minio](/features/postgres-and-minio.html) which we let work
together in the various utilities for files.

### `createOrUpdateFile`

Creates a new file and stores it in both Postgres and Minio (S3). If an existing
`id` is provided the file is overwritten. This function only requires a file
name and the source and is able to infer `contentType` and `contentLength`. If
`allowedContentTypes` is provided, an error will be thrown if the inferred
content type is not one of the allowed content types.

**Example**

```js
/**
 *
 * @param {InsightEvent} event
 * @param {AppSaveFileFiles} files
 * @return {Promise<void>}
 */
export async function appSaveFile(event, files) {
  eventStart(event, "app.saveFile");

  await createOrUpdateFile(
    sql,
    minio,
    "myBucket",
    { name: files.uploadedFile.originalFilename },
    files.uploadedFile.filepath,
    {
      allowedContentTypes: ["image/png", "application/x-sql"],
      schedulePlaceholderImageJob: true,
    },
  );

  eventStop(event);
}
```

**Errors**:

- `store.createOrUpdateFile.invalidName` -> When name is not specified.
- `store.createOrUpdateFile.invalidContentType` -> When the content type is not
  one of `allowedContentTypes`.

## Securing file downloads

In some cases you want to have private files as well, you can accomplish this by
using `fileSignAccessToken` and `fileVerifyAccessToken`. When returning an image
url to the client, you can add a JWT based token to the url specific for that
file id, and with a short expiration date via `fileSignAccessToken`. Then, when
the user requests the file, `fileVerifyAccessToken` can be used to check if the
token is still valid and issued for that file id.

Let's look at a quick example;

**Definition**:

```js
const T = new TypeCreator();
const R = T.router("/");

R.get("/product", "getProduct").response({
  publicImageUrl: T.string(),
  privateAvatarUrl: T.string(),
});

R.get("/product/public-image", "publicImage")
  .params({
    id: T.uuid(),
  })
  .response(T.file());

R.get("/product/private-avatar", "privateAvatar")
  .query({
    accessToken: T.string(),
  })
  .response(T.file());
```

**Implementation**:

```js
// For the example :)
const publicImageId = uuid();
const privateAvatarId = uuid();

appController.getProduct = (ctx, next) => {
  // Do user checks here, so see if the privateAvatarUrl should be added.

  ctx.body = {
    publicImageUrl: "https://example.com/product/public-image",
    privateAvatarUrl: `https://example.com/product/private-avatar?accessToken=${fileSignAccessToken(
      {
        fileId: privateAvatarId,
        signingKey: "secure key loaded from secure place",
        maxAgeInSeconds: 2 * 60, // User should load the image in 2 minutes
      },
    )}`,
  };

  return next();
};

appController.publicImage = async (ctx, next) => {
  const file = await queryFile({ where: { id: publicImageId } }).exec(sql);

  await sendFile(ctx, file /* ... */);

  return next();
};

appController.privateAvatar = async (ctx, next) => {
  const file = await queryFile({ where: { id: privateAvatarId } }).exec(sql);

  // Throws if expired or invalid
  fileVerifyAccessToken({
    signingKey: "secure key loaded from secure place",
    expectedFileId: file.id,
    fileAccessToken: ctx.validatedQuery.accessToken,
  });

  await sendFile(ctx, file /* ... */);

  return next();
};
```

An important note is that the tokens can't be revoked. So if you have that
requirement there are two options;

- Keep a blacklist of tokens somewhere
- Regenerate the `signingKey`, rendering all tokens invalid.

## Unified file responses

For a more complete metadata object to return from your api's, you can use
`StoreFileResponse`. It contains various properties, like the content type,
name, and if applicable, the image placeholder. To format this response object,
you could call `fileFormatResponse`. It allows for formatting a secure file url
as well via its accepted options.
