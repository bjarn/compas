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
export function generateOpenApi(
  logger: Logger,
  options: GenerateOpenApiOpts,
): Promise<void>;
export type OpenApiOpts = {
  version: string;
  title?: string | undefined;
  description?: string | undefined;
};
export type GenerateOpenApiOpts = {
  inputPath: string;
  outputFile: string;
  openApiOptions: OpenApiOpts;
  enabledGroups?: string[] | undefined;
  verbose?: boolean | undefined;
};
//# sourceMappingURL=generate-openApi.d.ts.map
