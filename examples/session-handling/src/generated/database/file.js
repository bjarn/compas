// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import {
  validateStoreFileOrderBy,
  validateStoreFileOrderBySpec,
  validateStoreFileQueryBuilder,
  validateStoreFileUpdate,
  validateStoreFileWhere,
} from "../store/validators.js";
import {
  fileGroupQueryBuilderSpec,
  fileGroupWhere,
  fileGroupWhereSpec,
  transformFileGroup,
} from "./fileGroup.js";
import { AppError, isNil, isPlainObject, isStaging } from "@compas/stdlib";
import {
  generatedQueryBuilderHelper,
  generatedUpdateHelper,
  generatedWhereBuilderHelper,
  isQueryPart,
  query,
} from "@compas/store";
const fileFieldSet = new Set([
  "bucketName",
  "contentLength",
  "contentType",
  "name",
  "meta",
  "id",
  "createdAt",
  "updatedAt",
]);
/**
 * Get all fields for file
 *
 * @param {string} [tableName="f."]
 * @param {{ excludePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function fileFields(tableName = "f.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (options.excludePrimaryKey) {
    return query([
      `${tableName}"contentLength", ${tableName}"bucketName", ${tableName}"contentType", ${tableName}"name", ${tableName}"meta", ${tableName}"createdAt", ${tableName}"updatedAt"`,
    ]);
  }
  return query([
    `${tableName}"id", ${tableName}"contentLength", ${tableName}"bucketName", ${tableName}"contentType", ${tableName}"name", ${tableName}"meta", ${tableName}"createdAt", ${tableName}"updatedAt"`,
  ]);
}
/** @type {any} */
export const fileWhereSpec = {
  fieldSpecification: [
    {
      tableKey: "id",
      keyType: "uuid",
      matchers: [
        { matcherKey: "id", matcherType: "equal" },
        { matcherKey: "idNotEqual", matcherType: "notEqual" },
        { matcherKey: "idIn", matcherType: "in" },
        { matcherKey: "idNotIn", matcherType: "notIn" },
      ],
    },
    {
      tableKey: "bucketName",
      keyType: "varchar",
      matchers: [
        { matcherKey: "bucketName", matcherType: "equal" },
        { matcherKey: "bucketNameNotEqual", matcherType: "notEqual" },
        { matcherKey: "bucketNameIn", matcherType: "in" },
        { matcherKey: "bucketNameNotIn", matcherType: "notIn" },
        { matcherKey: "bucketNameLike", matcherType: "like" },
        { matcherKey: "bucketNameILike", matcherType: "iLike" },
        { matcherKey: "bucketNameNotLike", matcherType: "notLike" },
      ],
    },
    {
      tableKey: "createdAt",
      keyType: "timestamptz",
      matchers: [
        { matcherKey: "createdAt", matcherType: "equal" },
        { matcherKey: "createdAtNotEqual", matcherType: "notEqual" },
        { matcherKey: "createdAtIn", matcherType: "in" },
        { matcherKey: "createdAtNotIn", matcherType: "notIn" },
        { matcherKey: "createdAtGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "createdAtLowerThan", matcherType: "lowerThan" },
        { matcherKey: "createdAtIsNull", matcherType: "isNull" },
        { matcherKey: "createdAtIsNotNull", matcherType: "isNotNull" },
      ],
    },
    {
      tableKey: "updatedAt",
      keyType: "timestamptz",
      matchers: [
        { matcherKey: "updatedAt", matcherType: "equal" },
        { matcherKey: "updatedAtNotEqual", matcherType: "notEqual" },
        { matcherKey: "updatedAtIn", matcherType: "in" },
        { matcherKey: "updatedAtNotIn", matcherType: "notIn" },
        { matcherKey: "updatedAtGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "updatedAtLowerThan", matcherType: "lowerThan" },
        { matcherKey: "updatedAtIsNull", matcherType: "isNull" },
        { matcherKey: "updatedAtIsNotNull", matcherType: "isNotNull" },
      ],
    },
    {
      tableKey: "group",
      keyType: "undefined",
      matchers: [
        {
          matcherKey: "viaGroup",
          matcherType: "via",
          relation: {
            entityName: "fileGroup",
            shortName: "fg",
            entityKey: "file",
            referencedKey: "id",
            where: () => fileGroupWhereSpec,
          },
        },
        {
          matcherKey: "groupNotExists",
          matcherType: "notExists",
          relation: {
            entityName: "fileGroup",
            shortName: "fg",
            entityKey: "file",
            referencedKey: "id",
            where: () => fileGroupWhereSpec,
          },
        },
      ],
    },
  ],
};
/**
 * Build 'WHERE ' part for file
 *
 * @param {StoreFileWhere} [where={}]
 * @param {string} [tableName="f."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function fileWhere(where = {}, tableName = "f.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const whereValidated = validateStoreFileWhere(where, "$.fileWhere");
    if (whereValidated.error) {
      throw whereValidated.error;
    }
    where = whereValidated.value;
  }
  return generatedWhereBuilderHelper(fileWhereSpec, where, tableName);
}
/**
 * Build 'ORDER BY ' part for file
 *
 * @param {StoreFileOrderBy} [orderBy=["createdAt", "updatedAt", "id"]]
 * @param {StoreFileOrderBySpec} [orderBySpec={}]
 * @param {string} [tableName="f."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function fileOrderBy(
  orderBy = ["createdAt", "updatedAt", "id"],
  orderBySpec = {},
  tableName = "f.",
  options = {},
) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const orderByValidated = validateStoreFileOrderBy(
      orderBy,
      "$.StoreFileOrderBy",
    );
    if (orderByValidated.error) {
      throw orderByValidated.error;
    }
    orderBy = orderByValidated.value;
    const orderBySpecValidated = validateStoreFileOrderBySpec(
      orderBySpec,
      "$.StoreFileOrderBySpec",
    );
    if (orderBySpecValidated.error) {
      throw orderBySpecValidated.error;
    }
    orderBySpec = orderBySpecValidated.value;
  }
  if (isQueryPart(orderBy)) {
    return orderBy;
  }
  const strings = [];
  const values = [];
  let i = 0;
  for (const value of orderBy) {
    if (i !== 0) {
      strings.push(", ");
      values.push(undefined);
    }
    i++;
    strings.push(`${tableName}"${value}" `, orderBySpec[value] ?? "ASC");
    values.push(undefined, undefined);
  }
  strings.push("");
  return query(strings, ...values);
}
/**
 * Build 'VALUES ' part for file
 *
 * @param {StoreFileInsertPartial|StoreFileInsertPartial[]} insert
 * @param {{ includePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function fileInsertValues(insert, options = {}) {
  if (!Array.isArray(insert)) {
    insert = [insert];
  }
  const str = [];
  const args = [];
  for (let i = 0; i < insert.length; ++i) {
    const it = insert[i];
    checkFieldsInSet("file", "insert", fileFieldSet, it);
    str.push("(");
    if (options?.includePrimaryKey) {
      args.push(it.id);
      str.push(", ");
    }
    args.push(it.contentLength ?? null);
    str.push(", ");
    args.push(it.bucketName ?? null);
    str.push(", ");
    args.push(it.contentType ?? null);
    str.push(", ");
    args.push(it.name ?? null);
    str.push(", ");
    args.push(JSON.stringify(it.meta ?? {}));
    str.push(", ");
    args.push(it.createdAt ?? new Date());
    str.push(", ");
    args.push(it.updatedAt ?? new Date());
    str.push(", ");
    // Fixup last comma & add undefined arg so strings are concatted correctly
    const lastStrIdx = str.length - 1;
    str[lastStrIdx] = str[lastStrIdx].substring(0, str[lastStrIdx].length - 2);
    args.push(undefined);
    str.push(")");
    args.push(undefined);
    if (i !== insert.length - 1) {
      args.push(undefined);
      str.push(",");
    }
  }
  if (args.length > 100000) {
    throw AppError.serverError({
      message:
        "Insert array has too many values, split up your array in smaller batches and execute 'fileInsert' multiple times.",
    });
  }
  return query(str, ...args);
}
/**
 * @param {string} entity
 * @param {string} subType
 * @param {Set} set
 * @param {*} value
 */
function checkFieldsInSet(entity, subType, set, value) {
  if (isStaging()) {
    for (const key of Object.keys(value)) {
      if (!set.has(key) && value[key] !== undefined) {
        throw new AppError(`query.${entity}.${subType}Fields`, 500, {
          extraKey: key,
          knownKeys: [...set],
        });
      }
    }
  }
}
/**
 * @param {Postgres} sql
 * @param {StoreFileWhere} [where]
 * @returns {Promise<number>}
 */
async function fileCount(sql, where) {
  const [result] = await query`
SELECT COUNT(f."id") as "countResult"
FROM "file" f
WHERE ${fileWhere(where)}
`.exec(sql);
  return Number(result?.countResult ?? "0");
}
/**
 * @param {Postgres} sql
 * @param {StoreFileWhere} [where={}]
 * @returns {Promise<void>}
 */
async function fileDelete(sql, where = {}) {
  return await query`
DELETE FROM "file" f
WHERE ${fileWhere(where)}
`.exec(sql);
}
/**
 * @param {Postgres} sql
 * @param {StoreFileInsertPartial|(StoreFileInsertPartial[])} insert
 * @param {{ withPrimaryKey?: boolean }} [options={}]
 * @returns {Promise<StoreFile[]>}
 */
async function fileInsert(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  options.withPrimaryKey = options.withPrimaryKey ?? false;
  const result = await query`
INSERT INTO "file" (${fileFields("", {
    excludePrimaryKey: !options.withPrimaryKey,
  })})
VALUES ${fileInsertValues(insert, {
    includePrimaryKey: options.withPrimaryKey,
  })}
RETURNING ${fileFields("")}
`.exec(sql);
  transformFile(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreFileInsertPartial|(StoreFileInsertPartial[])} insert
 * @param {{}} [options={}]
 * @returns {Promise<StoreFile[]>}
 */
async function fileUpsertOnId(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  const fieldString = [...fileFieldSet]
    .filter((it) => it !== "id" && it !== "createdAt")
    .map(
      (column) =>
        `"${column}" = COALESCE(EXCLUDED."${column}", "file"."${column}")`,
    )
    .join(",");
  const result = await query`
INSERT INTO "file" (${fileFields("", { excludePrimaryKey: false })})
VALUES ${fileInsertValues(insert, { includePrimaryKey: true })}
ON CONFLICT ("id") DO UPDATE SET ${query([fieldString])}
RETURNING ${fileFields("")}
`.exec(sql);
  transformFile(result);
  return result;
}
/** @type {any} */
export const fileUpdateSpec = {
  schemaName: ``,
  name: "file",
  shortName: "f",
  columns: [
    "bucketName",
    "contentLength",
    "contentType",
    "name",
    "meta",
    "id",
    "createdAt",
    "updatedAt",
  ],
  where: fileWhereSpec,
  injectUpdatedAt: true,
  fields: {
    bucketName: { type: "string", atomicUpdates: ["$append"] },
    contentLength: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    contentType: { type: "string", atomicUpdates: ["$append"] },
    name: { type: "string", atomicUpdates: ["$append"] },
    meta: { type: "jsonb", atomicUpdates: ["$set", "$remove"] },
    id: { type: "uuid", atomicUpdates: [] },
    createdAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
    updatedAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
  },
};
/**
 * (Atomic) update queries for file
 *
 * @type {StoreFileUpdateFn}
 */
const fileUpdate = async (sql, input) => {
  const updateValidated = validateStoreFileUpdate(input, "$.StoreFileUpdate");
  if (updateValidated.error) {
    throw updateValidated.error;
  }
  const result = await generatedUpdateHelper(fileUpdateSpec, input).exec(sql);
  if (!isNil(input.returning)) {
    transformFile(result);
    // @ts-ignore
    return result;
  }
  // @ts-ignore
  return undefined;
};
export const fileQueries = {
  fileCount,
  fileDelete,
  fileInsert,
  fileUpsertOnId,
  fileUpdate,
};
export const fileQueryBuilderSpec = {
  name: "file",
  shortName: "f",
  orderBy: fileOrderBy,
  where: fileWhereSpec,
  columns: [
    "bucketName",
    "contentLength",
    "contentType",
    "name",
    "meta",
    "id",
    "createdAt",
    "updatedAt",
  ],
  relations: [
    {
      builderKey: "group",
      ownKey: "id",
      referencedKey: "file",
      returnsMany: false,
      entityInformation: () => fileGroupQueryBuilderSpec,
    },
  ],
};
/**
 * Query Builder for file
 * Postgres based file storage.
 *
 * @param {StoreFileQueryBuilder} [builder={}]
 * @returns {{
 *  then: () => void,
 *  exec: (sql: Postgres) => Promise<QueryResultStoreFile[]>,
 *  execRaw: (sql: Postgres) => Promise<any[]>,
 *  queryPart: QueryPart<any>,
 * }}
 */
export function queryFile(builder = {}) {
  const builderValidated = validateStoreFileQueryBuilder(
    builder,
    "$.fileBuilder",
  );
  if (builderValidated.error) {
    throw builderValidated.error;
  }
  builder = builderValidated.value;
  const qb = generatedQueryBuilderHelper(fileQueryBuilderSpec, builder, {});
  return {
    then: () => {
      throw AppError.serverError({
        message:
          "Awaited 'queryFile' directly. Please use '.exec' or '.execRaw'.",
      });
    },
    execRaw: async (sql) => await qb.exec(sql),
    exec: async (sql) => {
      const result = await qb.exec(sql);
      transformFile(result, builder);
      return result;
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 *
 * Transform results from the query builder that adhere to the known structure
 * of 'file' and its relations.
 *
 * @param {any[]} values
 * @param {StoreFileQueryBuilder} [builder={}]
 */
export function transformFile(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
    if (value[builder.group?.as ?? "group"] === null) {
      value[builder.group?.as ?? "group"] = undefined;
    }
    if (isPlainObject(value[builder.group?.as ?? "group"])) {
      let arr = [value[builder.group?.as ?? "group"]];
      transformFileGroup(arr, builder.group);
      value[builder.group?.as ?? "group"] = arr[0];
    }
  }
}
