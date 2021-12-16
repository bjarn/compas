// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

export const compasGenerateSettings = {
  outputDirectory: "packages/store/src/generated",
  fileHeader:
    "// Generated by @compas/code-gen\n/* eslint-disable no-unused-vars */\n",
  isBrowser: false,
  isNodeServer: false,
  isNode: true,
  enabledGenerators: ["sql", "validator"],
  useTypescript: false,
  dumpStructure: true,
  dumpApiStructure: false,
  dumpPostgres: true,
  enabledGroups: ["store"],
};
export const storeStructureString =
  '{"imageTransformOptions":{"type":"object","group":"store","name":"imageTransformOptions","docString":"","isOptional":false,"validator":{"strict":false},"keys":{"q":{"type":"number","docString":"","isOptional":true,"defaultValue":"75","validator":{"convert":true,"floatingPoint":false,"min":1,"max":100}},"w":{"type":"number","docString":"","isOptional":false,"validator":{"convert":true,"floatingPoint":false,"min":1,"max":99999}}},"relations":[],"uniqueName":"StoreImageTransformOptions"},"jobInterval":{"type":"object","group":"store","name":"jobInterval","docString":"","isOptional":false,"validator":{"strict":true},"keys":{"years":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"months":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"days":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"hours":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"minutes":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"seconds":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}}},"relations":[],"uniqueName":"StoreJobInterval"},"file":{"type":"object","group":"store","name":"file","docString":"","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withSoftDeletes":true,"withPrimaryKey":true},"keys":{"bucketName":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{"searchable":true}},"contentLength":{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"contentType":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"meta":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"fileMeta","uniqueName":"StoreFileMeta"}}},"relations":[],"uniqueName":"StoreFile"},"fileGroup":{"type":"object","group":"store","name":"fileGroup","docString":"","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withSoftDeletes":true,"withPrimaryKey":true},"keys":{"name":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"order":{"type":"number","docString":"Hack to get an increasing integer by default","isOptional":true,"defaultValue":"Math.floor(Date.now() / 1000000)","validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{"searchable":true}},"meta":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"fileGroupMeta","uniqueName":"StoreFileGroupMeta"}}},"relations":[{"type":"relation","subType":"oneToOne","ownKey":"file","referencedKey":"group","isOptional":true,"reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"file","uniqueName":"StoreFile"}}},{"type":"relation","subType":"manyToOne","ownKey":"parent","referencedKey":"children","isOptional":true,"reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"fileGroup","uniqueName":"StoreFileGroup"}}},{"type":"relation","subType":"oneToMany","ownKey":"children","reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"fileGroup","uniqueName":"StoreFileGroup"}}}],"uniqueName":"StoreFileGroup"},"sessionStore":{"type":"object","group":"store","name":"sessionStore","docString":"","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}","validator":{},"rawValueImport":{},"rawValidatorImport":{}},"checksum":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"revokedAt":{"type":"date","docString":"","isOptional":true,"validator":{}}},"relations":[{"type":"relation","subType":"oneToMany","ownKey":"accessTokens","reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"sessionStoreToken","uniqueName":"StoreSessionStoreToken"}}}],"uniqueName":"StoreSessionStore"},"sessionStoreToken":{"type":"object","group":"store","name":"sessionStoreToken","docString":"","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withPrimaryKey":true},"keys":{"expiresAt":{"type":"date","docString":"","isOptional":false,"validator":{},"sql":{"searchable":true}},"revokedAt":{"type":"date","docString":"","isOptional":true,"validator":{},"sql":{"searchable":true}},"createdAt":{"type":"date","docString":"","isOptional":false,"validator":{}}},"relations":[{"type":"relation","subType":"manyToOne","ownKey":"session","referencedKey":"accessTokens","reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"sessionStore","uniqueName":"StoreSessionStore"}}},{"type":"relation","subType":"oneToOne","ownKey":"refreshToken","referencedKey":"accessToken","isOptional":true,"reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"sessionStoreToken","uniqueName":"StoreSessionStoreToken"}}}],"uniqueName":"StoreSessionStoreToken"},"job":{"type":"object","group":"store","name":"job","docString":"","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"id":{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{"searchable":true,"primary":true}},"isComplete":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false},"sql":{"searchable":true}},"priority":{"type":"number","docString":"","isOptional":true,"defaultValue":"0","validator":{"convert":false,"floatingPoint":false,"min":0}},"scheduledAt":{"type":"date","docString":"","isOptional":true,"defaultValue":"(new Date())","validator":{},"sql":{"searchable":true}},"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{"searchable":true}},"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}","validator":{},"rawValueImport":{},"rawValidatorImport":{}},"retryCount":{"type":"number","docString":"","isOptional":true,"defaultValue":"0","validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"handlerTimeout":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":1000}}},"relations":[],"uniqueName":"StoreJob"},"fileMeta":{"type":"object","group":"store","name":"fileMeta","docString":"User definable, optional object to store whatever you want","isOptional":true,"defaultValue":"{}","validator":{"strict":true},"keys":{"transforms":{"type":"any","docString":"","isOptional":true,"validator":{},"rawValueImport":{},"rawValidatorImport":{}},"transformedFromOriginal":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}}},"relations":[],"uniqueName":"StoreFileMeta"},"fileGroupMeta":{"type":"object","group":"store","name":"fileGroupMeta","docString":"User definable, optional object to store whatever you want","isOptional":true,"defaultValue":"{}","validator":{"strict":true},"keys":{},"relations":[],"uniqueName":"StoreFileGroupMeta"}}';
export const storeStructure = JSON.parse(storeStructureString);
export const structure = Object.assign({}, { store: storeStructure });
export const structureString = JSON.stringify(structure);
