// This file is a bit of a hack.
// This allows external tooling at some point to use the structure in the same way as the
// code-generator does. For now we keep this a secret, ssssh, but it is already used in
// @compas/cli for the visualisation tools.

export { exitOnErrorsOrReturn } from "./generator/errors.js";
export { preprocessorsExecute } from "./preprocessors/index.js";
export { buildTrie } from "./generator/router/trie.js";
export { addFieldsOfRelations } from "./generator/sql/add-fields.js";
export {
  getQueryEnabledObjects,
  doSqlChecks,
  getSortedKeysForType,
  getPrimaryKeyWithType,
} from "./generator/sql/utils.js";
export { validateCodeGenStructure } from "./generated/codeGen/validators.js";
