/// <reference types="node" />
/**
 * List available test files
 *
 * @returns {string[]}
 */
export function listTestFiles(): string[];
/**
 * @param {{
 *   singleFileMode: boolean
 * }} [options]
 * @returns {Promise<number>}
 */
export function runTestsInProcess(
  options?:
    | {
        singleFileMode: boolean;
      }
    | undefined,
): Promise<number>;
export const workerFile: import("url").URL;
//# sourceMappingURL=test-worker-internal.d.ts.map
