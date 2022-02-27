// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import {
  validateStoreJobOrderBy,
  validateStoreJobOrderBySpec,
  validateStoreJobQueryBuilder,
  validateStoreJobUpdate,
  validateStoreJobWhere,
} from "../store/validators.js";
import { AppError, isNil, isPlainObject, isStaging } from "@compas/stdlib";
import {
  generatedQueryBuilderHelper,
  generatedUpdateHelper,
  generatedWhereBuilderHelper,
  isQueryPart,
  query,
} from "@compas/store";
const jobFieldSet = new Set([
  "id",
  "isComplete",
  "priority",
  "scheduledAt",
  "name",
  "data",
  "retryCount",
  "handlerTimeout",
  "createdAt",
  "updatedAt",
]);
/**
 * Get all fields for job
 *
 * @param {string} [tableName="j."]
 * @param {{ excludePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function jobFields(tableName = "j.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (options.excludePrimaryKey) {
    return query([
      `${tableName}"isComplete", ${tableName}"handlerTimeout", ${tableName}"priority", ${tableName}"retryCount", ${tableName}"name", ${tableName}"scheduledAt", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
    ]);
  }
  return query([
    `${tableName}"id", ${tableName}"isComplete", ${tableName}"handlerTimeout", ${tableName}"priority", ${tableName}"retryCount", ${tableName}"name", ${tableName}"scheduledAt", ${tableName}"data", ${tableName}"createdAt", ${tableName}"updatedAt"`,
  ]);
}
/** @type {any} */
export const jobWhereSpec = {
  fieldSpecification: [
    {
      tableKey: "id",
      keyType: "int",
      matchers: [
        { matcherKey: "id", matcherType: "equal" },
        { matcherKey: "idNotEqual", matcherType: "notEqual" },
        { matcherKey: "idIn", matcherType: "in" },
        { matcherKey: "idNotIn", matcherType: "notIn" },
        { matcherKey: "idGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "idLowerThan", matcherType: "lowerThan" },
      ],
    },
    {
      tableKey: "isComplete",
      keyType: "uuid",
      matchers: [
        { matcherKey: "isComplete", matcherType: "equal" },
        { matcherKey: "isCompleteIsNull", matcherType: "isNull" },
        { matcherKey: "isCompleteIsNotNull", matcherType: "isNotNull" },
      ],
    },
    {
      tableKey: "name",
      keyType: "varchar",
      matchers: [
        { matcherKey: "name", matcherType: "equal" },
        { matcherKey: "nameNotEqual", matcherType: "notEqual" },
        { matcherKey: "nameIn", matcherType: "in" },
        { matcherKey: "nameNotIn", matcherType: "notIn" },
        { matcherKey: "nameLike", matcherType: "like" },
        { matcherKey: "nameILike", matcherType: "iLike" },
        { matcherKey: "nameNotLike", matcherType: "notLike" },
      ],
    },
    {
      tableKey: "scheduledAt",
      keyType: "timestamptz",
      matchers: [
        { matcherKey: "scheduledAt", matcherType: "equal" },
        { matcherKey: "scheduledAtNotEqual", matcherType: "notEqual" },
        { matcherKey: "scheduledAtIn", matcherType: "in" },
        { matcherKey: "scheduledAtNotIn", matcherType: "notIn" },
        { matcherKey: "scheduledAtGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "scheduledAtLowerThan", matcherType: "lowerThan" },
        { matcherKey: "scheduledAtIsNull", matcherType: "isNull" },
        { matcherKey: "scheduledAtIsNotNull", matcherType: "isNotNull" },
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
  ],
};
/**
 * Build 'WHERE ' part for job
 *
 * @param {StoreJobWhere} [where={}]
 * @param {string} [tableName="j."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function jobWhere(where = {}, tableName = "j.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const whereValidated = validateStoreJobWhere(where, "$.jobWhere");
    if (whereValidated.error) {
      throw whereValidated.error;
    }
    where = whereValidated.value;
  }
  return generatedWhereBuilderHelper(jobWhereSpec, where, tableName);
}
/**
 * Build 'ORDER BY ' part for job
 *
 * @param {StoreJobOrderBy} [orderBy=["createdAt", "updatedAt", "id"]]
 * @param {StoreJobOrderBySpec} [orderBySpec={}]
 * @param {string} [tableName="j."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function jobOrderBy(
  orderBy = ["createdAt", "updatedAt", "id"],
  orderBySpec = {},
  tableName = "j.",
  options = {},
) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const orderByValidated = validateStoreJobOrderBy(
      orderBy,
      "$.StoreJobOrderBy",
    );
    if (orderByValidated.error) {
      throw orderByValidated.error;
    }
    orderBy = orderByValidated.value;
    const orderBySpecValidated = validateStoreJobOrderBySpec(
      orderBySpec,
      "$.StoreJobOrderBySpec",
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
 * Build 'VALUES ' part for job
 *
 * @param {StoreJobInsertPartial|StoreJobInsertPartial[]} insert
 * @param {{ includePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function jobInsertValues(insert, options = {}) {
  if (!Array.isArray(insert)) {
    insert = [insert];
  }
  const str = [];
  const args = [];
  for (let i = 0; i < insert.length; ++i) {
    const it = insert[i];
    checkFieldsInSet("job", "insert", jobFieldSet, it);
    str.push("(");
    if (options?.includePrimaryKey) {
      args.push(it.id);
      str.push(", ");
    }
    args.push(it.isComplete ?? false);
    str.push(", ");
    args.push(it.handlerTimeout ?? null);
    str.push(", ");
    args.push(it.priority ?? 0);
    str.push(", ");
    args.push(it.retryCount ?? 0);
    str.push(", ");
    args.push(it.name ?? null);
    str.push(", ");
    args.push(it.scheduledAt ?? new Date());
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
        "Insert array has too many values, split up your array in smaller batches and execute 'jobInsert' multiple times.",
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
 * @param {StoreJobWhere} [where]
 * @returns {Promise<number>}
 */
async function jobCount(sql, where) {
  const [result] = await query`
SELECT COUNT(j."id") as "countResult"
FROM "job" j
WHERE ${jobWhere(where)}
`.exec(sql);
  return Number(result?.countResult ?? "0");
}
/**
 * @param {Postgres} sql
 * @param {StoreJobWhere} [where={}]
 * @returns {Promise<void>}
 */
async function jobDelete(sql, where = {}) {
  return await query`
DELETE FROM "job" j
WHERE ${jobWhere(where)}
`.exec(sql);
}
/**
 * @param {Postgres} sql
 * @param {StoreJobInsertPartial|(StoreJobInsertPartial[])} insert
 * @param {{ withPrimaryKey?: boolean }} [options={}]
 * @returns {Promise<StoreJob[]>}
 */
async function jobInsert(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  options.withPrimaryKey = options.withPrimaryKey ?? false;
  const result = await query`
INSERT INTO "job" (${jobFields("", {
    excludePrimaryKey: !options.withPrimaryKey,
  })})
VALUES ${jobInsertValues(insert, { includePrimaryKey: options.withPrimaryKey })}
RETURNING ${jobFields("")}
`.exec(sql);
  transformJob(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreJobInsertPartial|(StoreJobInsertPartial[])} insert
 * @param {{}} [options={}]
 * @returns {Promise<StoreJob[]>}
 */
async function jobUpsertOnId(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  const fieldString = [...jobFieldSet]
    .filter((it) => it !== "id" && it !== "createdAt")
    .map(
      (column) =>
        `"${column}" = COALESCE(EXCLUDED."${column}", "job"."${column}")`,
    )
    .join(",");
  const result = await query`
INSERT INTO "job" (${jobFields("", { excludePrimaryKey: false })})
VALUES ${jobInsertValues(insert, { includePrimaryKey: true })}
ON CONFLICT ("id") DO UPDATE SET ${query([fieldString])}
RETURNING ${jobFields("")}
`.exec(sql);
  transformJob(result);
  return result;
}
/** @type {any} */
export const jobUpdateSpec = {
  schemaName: ``,
  name: "job",
  shortName: "j",
  columns: [
    "id",
    "isComplete",
    "priority",
    "scheduledAt",
    "name",
    "data",
    "retryCount",
    "handlerTimeout",
    "createdAt",
    "updatedAt",
  ],
  where: jobWhereSpec,
  injectUpdatedAt: true,
  fields: {
    id: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    isComplete: { type: "boolean", atomicUpdates: ["$negate"] },
    priority: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    scheduledAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
    name: { type: "string", atomicUpdates: ["$append"] },
    data: { type: "jsonb", atomicUpdates: ["$set", "$remove"] },
    retryCount: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    handlerTimeout: {
      type: "number",
      atomicUpdates: ["$add", "$subtract", "$multiply", "$divide"],
    },
    createdAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
    updatedAt: { type: "date", atomicUpdates: ["$add", "$subtract"] },
  },
};
/**
 * (Atomic) update queries for job
 *
 * @type {StoreJobUpdateFn}
 */
const jobUpdate = async (sql, input) => {
  const updateValidated = validateStoreJobUpdate(input, "$.StoreJobUpdate");
  if (updateValidated.error) {
    throw updateValidated.error;
  }
  const result = await generatedUpdateHelper(jobUpdateSpec, input).exec(sql);
  if (!isNil(input.returning)) {
    transformJob(result);
    // @ts-ignore
    return result;
  }
  // @ts-ignore
  return undefined;
};
export const jobQueries = {
  jobCount,
  jobDelete,
  jobInsert,
  jobUpsertOnId,
  jobUpdate,
};
export const jobQueryBuilderSpec = {
  name: "job",
  shortName: "j",
  orderBy: jobOrderBy,
  where: jobWhereSpec,
  columns: [
    "id",
    "isComplete",
    "priority",
    "scheduledAt",
    "name",
    "data",
    "retryCount",
    "handlerTimeout",
    "createdAt",
    "updatedAt",
  ],
  relations: [],
};
/**
 * Query Builder for job
 * Postgres based job queue.
 * Use {@link addEventToQueue}, {@link addRecurringJobToQueue} and {@link addJobWithCustomTimeoutToQueue}
 * to insert new jobs in to the queue.
 * Use {@link JobQueueWorker} as a way to pick up jobs.
 *
 * @param {StoreJobQueryBuilder} [builder={}]
 * @returns {{
 *  then: () => void,
 *  exec: (sql: Postgres) => Promise<QueryResultStoreJob[]>,
 *  execRaw: (sql: Postgres) => Promise<any[]>,
 *  queryPart: QueryPart<any>,
 * }}
 */
export function queryJob(builder = {}) {
  const builderValidated = validateStoreJobQueryBuilder(
    builder,
    "$.jobBuilder",
  );
  if (builderValidated.error) {
    throw builderValidated.error;
  }
  builder = builderValidated.value;
  const qb = generatedQueryBuilderHelper(jobQueryBuilderSpec, builder, {});
  return {
    then: () => {
      throw AppError.serverError({
        message:
          "Awaited 'queryJob' directly. Please use '.exec' or '.execRaw'.",
      });
    },
    execRaw: async (sql) => await qb.exec(sql),
    exec: async (sql) => {
      const result = await qb.exec(sql);
      transformJob(result, builder);
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
 * of 'job' and its relations.
 *
 * @param {any[]} values
 * @param {StoreJobQueryBuilder} [builder={}]
 */
export function transformJob(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    if (value.handlerTimeout === null) {
      value.handlerTimeout = undefined;
    }
    if (typeof value.scheduledAt === "string") {
      value.scheduledAt = new Date(value.scheduledAt);
    }
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
  }
}
