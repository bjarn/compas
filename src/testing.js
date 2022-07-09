import { mkdir, rm } from "node:fs/promises";
import { uuid } from "@compas/stdlib";
import {
  createTestPostgresDatabase,
  ensureBucket,
  newMinioClient,
} from "@compas/store";

/**
 * @type {import("@compas/store").Postgres}
 */
export let sql;

/**
 * @type {import("@compas/store").MinioClient}
 */
export let minioClient;

/**
 * @type {string}
 */
export const testBucketName = uuid();

/**
 * @type {string}
 */
export let temporaryDirectory;

/**
 * Inject services that can be used in tests across this repo.
 *
 * @returns {Promise<void>}
 */
export async function injectTestServices() {
  sql = await createTestPostgresDatabase();
  minioClient = newMinioClient({});

  await ensureBucket(minioClient, testBucketName, "eu-central-1");

  temporaryDirectory = `./test/tmp/${uuid()}/`;
  await rm("./test/tmp", { force: true, recursive: true });
  await mkdir(temporaryDirectory, { recursive: true });
}

/**
 * Destroy services that are used for testing
 *
 * @returns {Promise<void>}
 */
export async function destroyTestServices() {
  await sql.end({});
}
