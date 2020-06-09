import { compileTemplate, isNil } from "@lbu/stdlib";
import { TypeCreator } from "./types/index.js";

/**
 * Uppercase first character of the input string
 *
 * @param {string} str input string
 * @returns {string}
 */
export function upperCaseFirst(str) {
  return str.length > 0 ? str[0].toUpperCase() + str.substring(1) : "";
}

/**
 * Lowercase first character of the input string
 *
 * @param {string} str input string
 * @returns {string}
 */
export function lowerCaseFirst(str) {
  return str.length > 0 ? str[0].toLowerCase() + str.substring(1) : "";
}

/**
 * Compile templates from types and build a dynamic execute template function
 *
 * @param {TemplateContext} tc
 * @param {object} options
 * @param {string} key
 * @param {string} fnStringStart
 * @param {function(TypePlugin, string): string} fnStringAdd
 * @param {string} fnStringEnd
 * @param {string} [pluginKey]
 * @returns {void}
 */
export function compileDynamicTemplates(
  tc,
  options,
  key,
  { fnStringStart, fnStringAdd, fnStringEnd },
  pluginKey = key,
) {
  const typePlugins = TypeCreator.getTypesWithProperty(pluginKey);
  const optsKey = `${key}_enabledTypes`;

  options[optsKey] = [];
  let fnString = fnStringStart;

  for (const type of typePlugins) {
    options[optsKey].push(type.name);

    const templateName = `${type.name}${upperCaseFirst(key)}`;
    compileTemplate(tc, templateName, type[pluginKey]());

    fnString += fnStringAdd(type, templateName);
  }

  fnString += fnStringEnd;

  compileTemplate(tc, `${key}Exec`, fnString);
}

/**
 * Try to get the (recursive) (referenced) type from item
 * Only works in the preGenerate or generate phases of code-generation
 *
 * @param {object} item Any LBU structure
 * @returns {string|undefined}
 */
export function getTypeOfItem(item) {
  if (item?.type !== "reference") {
    return item.type;
  }

  if (!isNil(item?.referencedItem)) {
    return getTypeOfItem(item?.referencedItem);
  }

  return undefined;
}
