import { App, loadFromOpenAPISpec, TypeCreator } from "@lbu/code-gen";
import { log } from "@lbu/insight";
import { mainFn } from "@lbu/stdlib";
import { storeStructure } from "@lbu/store";
import { readFileSync } from "fs";

mainFn(import.meta, log, main);

export const nodemonArgs =
  "--ignore generated --ignore stubs --ignore **/generated/*.js -e tmpl,js,json";

/**
 *
 */
async function main() {
  const app = await App.new({
    verbose: true,
  });

  const M = new TypeCreator();

  app.add(
    M.bool("Foo").optional().convert().default(true),
    M.anyOf("Bar", M.reference("app", "foo"), M.string()),
  );

  app.add(M.bool("Foo").optional().convert().default(true));
  app.add(M.anyOf("Bar", M.bool(), M.bool().optional().default(true)));
  app.add(
    M.object("Obj").keys({
      foo: M.array(M.number().optional()),
    }),
  );

  app.add(M.string("Str"));
  app.add(
    M.object("Objec", {
      str: M.reference("App", "Str"),
    }),
  );
  app.add(
    M.object("User", {
      id: M.uuid(),
      name: M.string().min(1).max(15).mock("__.first"),
      age: M.number().integer().min(0).max(150).convert().mock("__.age"),
    }),
  );

  app.add(
    M.object("Items", {
      id: M.uuid(),
      userId: M.reference("App", "User").field("id", "user"),
      name: M.string(),
      count: M.number().integer(),
      createdAt: M.date().defaultToNow(),
      updatedAt: M.date(),
    }),
  );

  const myGeneric = M.generic("MyGeneric")
    .keys(M.string())
    .values(M.anyOf([M.bool().convert(), M.number()]))
    .docs("Foo");

  app.add(M.array("GenericArray").values(myGeneric));

  const T = new TypeCreator("Todo");

  app.add(T.bool("Boolean"));
  app.add(T.array("MyArr").values(T.reference("App", "Items")));

  const G = T.router("/foo");
  app.add(G.get().query(M.reference("App", "User")));
  app.add(
    G.post("/:id")
      .body(
        M.object({
          foo: M.string(),
        }),
      )
      .query(
        M.object({
          id: M.bool().convert(),
        }),
      )
      .response(
        M.object().keys({
          bar: M.string(),
        }),
      ),
  );

  const tmp = M.object("Temporary", { foo: M.number().min(10) });

  app.add(
    M.object("Foo", {
      id: M.uuid().primary(),
      bar: M.reference("App", "User").field("id", "user"),
      baz: M.reference("App", "Items").field("id", "items"),
      tmp: tmp,
    }),
  );

  app.add(M.array("ArrayThing", M.reference("App", "Foo").field("id")));

  app.extend(storeStructure);

  app.add(
    M.object("fileMeta", {
      id: M.uuid().primary(),
      fileId: M.reference("Store", "fileStore").field("id", "file"),
      isProcessed: M.bool().default("false"),
    }).enableQueries({ withHistory: true }),
  );

  const externalApi = "apiName";

  app.extend(
    loadFromOpenAPISpec(
      externalApi,
      JSON.parse(
        readFileSync(
          "./packages/code-gen/src/__fixtures__/openapi.json",
          "utf-8",
        ),
      ),
    ),
  );

  await app.generate({
    outputDirectory: "./generated",
    enabledGenerators: [
      "type",
      "router",
      "apiClient",
      "sql",
      "validator",
      "mock",
    ],
    useTypescript: false,
    dumpStructure: true,
    dumpPostgres: true,
  });

  await app.generate({
    outputDirectory: "./stubs/app_stubs",
    enabledGroups: ["app", "todo"],
    useStubGenerators: true,
    dumpStructure: true,
    enabledGenerators: ["type", "mock", "router", "apiClient"],
  });

  await app.generate({
    outputDirectory: "./stubs/pet_stubs",
    enabledGroups: [externalApi],
    useStubGenerators: true,
    dumpStructure: true,
    enabledGenerators: ["type", "mock", "router", "apiClient"],
  });
}
