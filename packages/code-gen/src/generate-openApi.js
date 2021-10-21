import { mkdirSync, writeFileSync } from "fs";
import { pathToFileURL } from "url";
import { isPlainObject } from "@compas/stdlib";
import { generateOpenApiFile } from "./generator/openAPI/index.js";

/**
 * @typedef {object} OpenApiOpts
 * @property {string} version
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef {object} GenerateOpenApiOpts
 * @property {string} inputPath
 * @property {string} outputFile
 * @property {OpenApiOpts} openApiOptions
 * @property {string[]} [enabledGroups]
 * @property {boolean|undefined} [verbose]
 */

/**
 * @param {Logger} logger
 * @param {GenerateOpenApiOpts} options
 * @returns {Promise<void>}
 */
export async function generateOpenApi(logger, options) {
  if (options.verbose) {
    logger.info({
      openApiGenerator: options,
    });
  }

  // @ts-ignore
  const { structure } = await import(pathToFileURL(options.inputPath));
  if (!isPlainObject(structure)) {
    throw Error("invalid structure file"); // TODO replace with errorsOrReturn
  }

  // ensure enabledGroups are present in structure
  const structureGroups = Object.keys(structure);
  for (const group of options?.enabledGroups ?? []) {
    if (!structureGroups.includes(group)) {
      throw Error("invalid group (not found in structure)"); // TODO replace with errorsOrReturn
    }
  }

  const contents = generateOpenApiFile(structure, options);

  // write file to absolute location
  const directory = options.outputFile.split("/").slice(0, -1).join("/");
  mkdirSync(directory, { recursive: true });
  writeFileSync(options.outputFile, contents, "utf8");
}
