// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import {
  validateStoreSessionStoreOrderBy,
  validateStoreSessionStoreOrderBySpec,
  validateStoreSessionStoreQueryBuilder,
  validateStoreSessionStoreUpdate,
  validateStoreSessionStoreWhere,
} from "../store/validators.js";
import {
  sessionStoreTokenQueryBuilderSpec,
  sessionStoreTokenWhere,
  sessionStoreTokenWhereSpec,
  transformSessionStoreToken,
} from "./sessionStoreToken.js";
import { AppError, isNil, isPlainObject, isStaging } from "@compas/stdlib";
import {
  generatedQueryBuilderHelper,
  generatedUpdateHelper,
  generatedWhereBuilderHelper,
  isQueryPart,
  query,
} from "@compas/store";
const sessionStoreFieldSet = new Set([
  "data",
  "checksum",
  "revokedAt",
  "id",
  "createdAt",
  "updatedAt",
]);
/**
 * Get all fields for sessionStore
 *
 * @param {string} [tableName="ss."]
 * @param {{ excludePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function sessionStoreFields(tableName = "ss.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (options.excludePrimaryKey) {
    return query([
      `${tableName}"checksum", ${tableName}"revokedAt", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
    ]);
  }
  return query([
    `${tableName}"id", ${tableName}"checksum", ${tableName}"revokedAt", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
  ]);
}
/** @type {any} */
export const sessionStoreWhereSpec = {
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
      tableKey: "accessTokens",
      keyType: "undefined",
      matchers: [
        {
          matcherKey: "viaAccessTokens",
          matcherType: "via",
          relation: {
            entityName: "sessionStoreToken",
            shortName: "sst",
            entityKey: "session",
            referencedKey: "id",
            where: () => sessionStoreTokenWhereSpec,
          },
        },
        {
          matcherKey: "accessTokensNotExists",
          matcherType: "notExists",
          relation: {
            entityName: "sessionStoreToken",
            shortName: "sst",
            entityKey: "session",
            referencedKey: "id",
            where: () => sessionStoreTokenWhereSpec,
          },
        },
      ],
    },
  ],
};
/**
 * Build 'WHERE ' part for sessionStore
 *
 * @param {StoreSessionStoreWhere} [where={}]
 * @param {string} [tableName="ss."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function sessionStoreWhere(where = {}, tableName = "ss.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const whereValidated = validateStoreSessionStoreWhere(
      where,
      "$.sessionStoreWhere",
    );
    if (whereValidated.error) {
      throw whereValidated.error;
    }
    where = whereValidated.value;
  }
  return generatedWhereBuilderHelper(sessionStoreWhereSpec, where, tableName);
}
/**
 * Build 'ORDER BY ' part for sessionStore
 *
 * @param {StoreSessionStoreOrderBy} [orderBy=["createdAt", "updatedAt", "id"]]
 * @param {StoreSessionStoreOrderBySpec} [orderBySpec={}]
 * @param {string} [tableName="ss."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function sessionStoreOrderBy(
  orderBy = ["createdAt", "updatedAt", "id"],
  orderBySpec = {},
  tableName = "ss.",
  options = {},
) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const orderByValidated = validateStoreSessionStoreOrderBy(
      orderBy,
      "$.StoreSessionStoreOrderBy",
    );
    if (orderByValidated.error) {
      throw orderByValidated.error;
    }
    orderBy = orderByValidated.value;
    const orderBySpecValidated = validateStoreSessionStoreOrderBySpec(
      orderBySpec,
      "$.StoreSessionStoreOrderBySpec",
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
 * Build 'VALUES ' part for sessionStore
 *
 * @param {StoreSessionStoreInsertPartial|StoreSessionStoreInsertPartial[]} insert
 * @param {{ includePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function sessionStoreInsertValues(insert, options = {}) {
  if (!Array.isArray(insert)) {
    insert = [insert];
  }
  const str = [];
  const args = [];
  for (let i = 0; i < insert.length; ++i) {
    const it = insert[i];
    checkFieldsInSet("sessionStore", "insert", sessionStoreFieldSet, it);
    str.push("(");
    if (options?.includePrimaryKey) {
      args.push(it.id);
      str.push(", ");
    }
    args.push(it.checksum ?? null);
    str.push(", ");
    args.push(it.revokedAt ?? null);
    str.push(", ");
    args.push(JSON.stringify(it.data ?? {}));
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
        "Insert array has too many values, split up your array in smaller batches and execute 'sessionStoreInsert' multiple times.",
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
 * @param {StoreSessionStoreWhere} [where]
 * @returns {Promise<number>}
 */
async function sessionStoreCount(sql, where) {
  const [result] = await query`
SELECT COUNT(ss."id") as "countResult"
FROM "sessionStore" ss
WHERE ${sessionStoreWhere(where)}
`.exec(sql);
  return Number(result?.countResult ?? "0");
}
/**
 * @param {Postgres} sql
 * @param {StoreSessionStoreWhere} [where={}]
 * @returns {Promise<void>}
 */
async function sessionStoreDelete(sql, where = {}) {
  return await query`
DELETE FROM "sessionStore" ss
WHERE ${sessionStoreWhere(where)}
`.exec(sql);
}
/**
 * @param {Postgres} sql
 * @param {StoreSessionStoreInsertPartial|(StoreSessionStoreInsertPartial[])} insert
 * @param {{ withPrimaryKey?: boolean }} [options={}]
 * @returns {Promise<StoreSessionStore[]>}
 */
async function sessionStoreInsert(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  options.withPrimaryKey = options.withPrimaryKey ?? false;
  const result = await query`
INSERT INTO "sessionStore" (${sessionStoreFields("", {
    excludePrimaryKey: !options.withPrimaryKey,
  })})
VALUES ${sessionStoreInsertValues(insert, {
    includePrimaryKey: options.withPrimaryKey,
  })}
RETURNING ${sessionStoreFields("")}
`.exec(sql);
  transformSessionStore(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreSessionStoreInsertPartial|(StoreSessionStoreInsertPartial[])} insert
 * @param {{}} [options={}]
 * @returns {Promise<StoreSessionStore[]>}
 */
async function sessionStoreUpsertOnId(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  const fieldString = [...sessionStoreFieldSet]
    .filter((it) => it !== "id" && it !== "createdAt")
    .map(
      (column) =>
        `"${column}" = COALESCE(EXCLUDED."${column}", "sessionStore"."${column}")`,
    )
    .join(",");
  const result = await query`
INSERT INTO "sessionStore" (${sessionStoreFields("", {
    excludePrimaryKey: false,
  })})
VALUES ${sessionStoreInsertValues(insert, { includePrimaryKey: true })}
ON CONFLICT ("id") DO UPDATE SET ${query([fieldString])}
RETURNING ${sessionStoreFields("")}
`.exec(sql);
  transformSessionStore(result);
  return result;
}
/** @type {any} */
export const sessionStoreUpdateSpec = {
  schemaName: ``,
  name: "sessionStore",
  shortName: "ss",
  columns: ["data", "checksum", "revokedAt", "id", "createdAt", "updatedAt"],
  where: sessionStoreWhereSpec,
  injectUpdatedAt: true,
  fields: {
    data: { type: "jsonb", atomicUpdates: ["$set", "$remove"] },
    checksum: { type: "string", atomicUpdates: ["$append"] },
    revokedAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
    id: { type: "uuid", atomicUpdates: [] },
    createdAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
    updatedAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
  },
};
/**
 * (Atomic) update queries for sessionStore
 *
 * @type {StoreSessionStoreUpdateFn}
 */
const sessionStoreUpdate = async (sql, input) => {
  const updateValidated = validateStoreSessionStoreUpdate(
    input,
    "$.StoreSessionStoreUpdate",
  );
  if (updateValidated.error) {
    throw updateValidated.error;
  }
  const result = await generatedUpdateHelper(
    sessionStoreUpdateSpec,
    input,
  ).exec(sql);
  if (!isNil(input.returning)) {
    transformSessionStore(result);
    // @ts-ignore
    return result;
  }
  // @ts-ignore
  return undefined;
};
export const sessionStoreQueries = {
  sessionStoreCount,
  sessionStoreDelete,
  sessionStoreInsert,
  sessionStoreUpsertOnId,
  sessionStoreUpdate,
};
export const sessionStoreQueryBuilderSpec = {
  name: "sessionStore",
  shortName: "ss",
  orderBy: sessionStoreOrderBy,
  where: sessionStoreWhereSpec,
  columns: ["data", "checksum", "revokedAt", "id", "createdAt", "updatedAt"],
  relations: [
    {
      builderKey: "accessTokens",
      ownKey: "id",
      referencedKey: "session",
      returnsMany: true,
      entityInformation: () => sessionStoreTokenQueryBuilderSpec,
    },
  ],
};
/**
 * Query Builder for sessionStore
 * Session data store, used by 'sessionStore\*' functions.
 *
 * @param {StoreSessionStoreQueryBuilder} [builder={}]
 * @returns {{
 *  then: () => void,
 *  exec: (sql: Postgres) => Promise<QueryResultStoreSessionStore[]>,
 *  execRaw: (sql: Postgres) => Promise<any[]>,
 *  queryPart: QueryPart<any>,
 * }}
 */
export function querySessionStore(builder = {}) {
  const builderValidated = validateStoreSessionStoreQueryBuilder(
    builder,
    "$.sessionStoreBuilder",
  );
  if (builderValidated.error) {
    throw builderValidated.error;
  }
  builder = builderValidated.value;
  const qb = generatedQueryBuilderHelper(
    sessionStoreQueryBuilderSpec,
    builder,
    {},
  );
  return {
    then: () => {
      throw AppError.serverError({
        message:
          "Awaited 'querySessionStore' directly. Please use '.exec' or '.execRaw'.",
      });
    },
    execRaw: async (sql) => await qb.exec(sql),
    exec: async (sql) => {
      const result = await qb.exec(sql);
      transformSessionStore(result, builder);
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
 * of 'sessionStore' and its relations.
 *
 * @param {any[]} values
 * @param {StoreSessionStoreQueryBuilder} [builder={}]
 */
export function transformSessionStore(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    if (value.revokedAt === null) {
      value.revokedAt = undefined;
    }
    if (typeof value.revokedAt === "string") {
      value.revokedAt = new Date(value.revokedAt);
    }
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
    if (value[builder.accessTokens?.as ?? "accessTokens"] === null) {
      value[builder.accessTokens?.as ?? "accessTokens"] = undefined;
    }
    if (Array.isArray(value[builder.accessTokens?.as ?? "accessTokens"])) {
      transformSessionStoreToken(
        value[builder.accessTokens?.as ?? "accessTokens"],
        builder.accessTokens,
      );
    }
  }
}