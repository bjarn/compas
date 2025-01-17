/**
 * @typedef {import("./types/advanced-types.js").Postgres} Postgres
 */

/**
 * @typedef {import("./types/advanced-types.js").MinioClient} MinioClient
 */

/**
 * @template T
 * @typedef {import("./types/advanced-types.js").QueryPart<T>} QueryPart
 */

/**
 * @typedef {import("./types/advanced-types.js").QueryPartArg} QueryPartArg
 */

/**
 * @template Type
 * @template {undefined | "*" | string[]} Selector
 * @typedef {import("./types/advanced-types.js").Returning<Type, Selector>} Returning
 */

/**
 * @typedef {import("./src/send-transformed-image").GetStreamFn} GetStreamFn
 */

/**
 * @typedef {import("./src/session-store.js").SessionStoreSettings} SessionStoreSettings
 */

/**
 * @typedef {import("./src/session-transport.js").SessionTransportSettings}
 *   SessionTransportSettings
 */

export { structure as storeStructure } from "./src/generated/common/structure.js";
export { queries as storeQueries } from "./src/generated/database/index.js";

export { setStoreQueries } from "./src/generated.js";

export {
  generatedWhereBuilderHelper,
  generatedUpdateHelper,
  generatedQueryBuilderHelper,
} from "./src/generator-helpers.js";

export {
  newMinioClient,
  minio,
  ensureBucket,
  removeBucket,
  listObjects,
  removeBucketAndObjectsInBucket,
  copyAllObjects,
} from "./src/minio.js";

export { newPostgresConnection, postgres } from "./src/postgres.js";

export {
  cleanupTestPostgresDatabase,
  createTestPostgresDatabase,
  setPostgresDatabaseTemplate,
  cleanupPostgresDatabaseTemplate,
} from "./src/testing.js";

export {
  newMigrateContext,
  getMigrationsToBeApplied,
  runMigrations,
} from "./src/migrations.js";

export {
  createOrUpdateFile,
  fileFormatResponse,
  copyFile,
  getFileStream,
  syncDeletedFiles,
  fileSignAccessToken,
  fileVerifyAccessToken,
} from "./src/files.js";
export {
  jobFileCleanup,
  jobFileGeneratePlaceholderImage,
} from "./src/files-jobs.js";

export { FileCache } from "./src/file-cache.js";

export {
  queueWorkerAddJob,
  queueWorkerRegisterCronJobs,
  queueWorkerCreate,
} from "./src/queue-worker.js";
export { jobQueueInsights, jobQueueCleanup } from "./src/queue-worker-jobs.js";

export {
  SESSION_STORE_POTENTIAL_LEAKED_SESSION_JOB_NAME,
  sessionStoreCreate,
  sessionStoreGet,
  sessionStoreUpdate,
  sessionStoreInvalidate,
  sessionStoreRefreshTokens,
  sessionStoreCleanupExpiredSessions,
} from "./src/session-store.js";
export {
  jobSessionStoreCleanup,
  jobSessionStoreProcessLeakedSession,
} from "./src/session-store-jobs.js";

export { sessionTransportLoadFromContext } from "./src/session-transport.js";

export {
  query,
  isQueryPart,
  stringifyQueryPart,
  explainAnalyzeQuery,
} from "./src/query.js";

export { postgresTableSizes } from "./src/insight.js";

export { sendTransformedImage } from "./src/send-transformed-image.js";
