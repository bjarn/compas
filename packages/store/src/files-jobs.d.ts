/**
 * Returns a {@link QueueWorkerHandler} that syncs the deleted files from Postgres to
 * Minio. via {@link syncDeletedFiles}.
 *
 * Recommended interval: daily
 * Recommended cronExpression: 0 2 * * *
 *
 * @param {import("../types/advanced-types.js").MinioClient} minioClient
 * @param {string} bucketName
 * @returns {import("./queue-worker.js").QueueWorkerHandler}
 */
export function jobFileCleanup(
  minioClient: import("../types/advanced-types.js").MinioClient,
  bucketName: string,
): import("./queue-worker.js").QueueWorkerHandler;
/**
 * Returns a {@link QueueWorkerHandler} that generates a `meta.placeholderImage` for the
 * provided `fileId`. The `compas.file.generatePlaceholderImage` job is inserted when
 * `createOrUpdateFile` is provided with the `schedulePlaceholderImageJob` option.
 *
 *
 * @param {import("../types/advanced-types.js").MinioClient} minioClient
 * @param {string} bucketName
 * @returns {import("./queue-worker.js").QueueWorkerHandler}
 */
export function jobFileGeneratePlaceholderImage(
  minioClient: import("../types/advanced-types.js").MinioClient,
  bucketName: string,
): import("./queue-worker.js").QueueWorkerHandler;
//# sourceMappingURL=files-jobs.d.ts.map
