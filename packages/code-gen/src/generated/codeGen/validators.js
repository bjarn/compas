// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { anonymousValidator127554530,
anonymousValidator1287070944,
anonymousValidator1312175728,
anonymousValidator1377926226,
anonymousValidator1390215584,
anonymousValidator1413365072,
anonymousValidator1441913722,
anonymousValidator1519740867,
anonymousValidator1664519436,
anonymousValidator1672152398,
anonymousValidator17105276,
anonymousValidator17476225,
anonymousValidator1836970168,
anonymousValidator2019605291,
anonymousValidator20588538,
anonymousValidator2069957416,
anonymousValidator243901689,
anonymousValidator508679687,
anonymousValidator682118687,
anonymousValidator682551261,
anonymousValidator980814292 } from "../common/anonymous-validators.js";
import { AppError, isNil } from "@compas/stdlib";
/**
* @template T
* @typedef {import("@compas/stdlib").Either<T, AppError>} Either
*/
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenAnyOfType>}
*/
export function validateCodeGenAnyOfType(value, propertyPath = "$") {
const result = anonymousValidator20588538(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenAnyOfType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenAnyType>}
*/
export function validateCodeGenAnyType(value, propertyPath = "$") {
const result = anonymousValidator1519740867(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenAnyType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenArrayType>}
*/
export function validateCodeGenArrayType(value, propertyPath = "$") {
const result = anonymousValidator1312175728(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenArrayType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenBooleanType>}
*/
export function validateCodeGenBooleanType(value, propertyPath = "$") {
const result = anonymousValidator17476225(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenBooleanType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenContext>}
*/
export function validateCodeGenContext(value, propertyPath = "$") {
const result = anonymousValidator980814292(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenContext}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenDateType>}
*/
export function validateCodeGenDateType(value, propertyPath = "$") {
const result = anonymousValidator2019605291(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenDateType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenFile>}
*/
export function validateCodeGenFile(value, propertyPath = "$") {
const result = anonymousValidator682118687(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenFile}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenFileType>}
*/
export function validateCodeGenFileType(value, propertyPath = "$") {
const result = anonymousValidator508679687(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenFileType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenGenerateOpts>}
*/
export function validateCodeGenGenerateOpts(value, propertyPath = "$") {
const result = anonymousValidator2069957416(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenGenerateOpts}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenGenericType>}
*/
export function validateCodeGenGenericType(value, propertyPath = "$") {
const result = anonymousValidator1377926226(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenGenericType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenNumberType>}
*/
export function validateCodeGenNumberType(value, propertyPath = "$") {
const result = anonymousValidator1441913722(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenNumberType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenObjectType>}
*/
export function validateCodeGenObjectType(value, propertyPath = "$") {
const result = anonymousValidator17105276(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenObjectType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenReferenceType>}
*/
export function validateCodeGenReferenceType(value, propertyPath = "$") {
const result = anonymousValidator127554530(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenReferenceType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenRelationType>}
*/
export function validateCodeGenRelationType(value, propertyPath = "$") {
const result = anonymousValidator243901689(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenRelationType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenRouteType>}
*/
export function validateCodeGenRouteType(value, propertyPath = "$") {
const result = anonymousValidator1390215584(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenRouteType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenStringType>}
*/
export function validateCodeGenStringType(value, propertyPath = "$") {
const result = anonymousValidator1672152398(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenStringType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenStructure>}
*/
export function validateCodeGenStructure(value, propertyPath = "$") {
const result = anonymousValidator1413365072(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenStructure}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenTemplateState>}
*/
export function validateCodeGenTemplateState(value, propertyPath = "$") {
const result = anonymousValidator1664519436(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenTemplateState}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenType>}
*/
export function validateCodeGenType(value, propertyPath = "$") {
const result = anonymousValidator682551261(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenType}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenTypeSettings>}
*/
export function validateCodeGenTypeSettings(value, propertyPath = "$") {
const result = anonymousValidator1287070944(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenTypeSettings}} */
return { value: result.value };
}
/**
* @param {undefined|any} value
* @param {string|undefined} [propertyPath]
* @returns {Either<CodeGenUuidType>}
*/
export function validateCodeGenUuidType(value, propertyPath = "$") {
const result = anonymousValidator1836970168(value, propertyPath);
if (result.errors) {
const info = {};
for (const err of result.errors) {
if (isNil(info[err.propertyPath])) {
info[err.propertyPath] = err;
} else if (Array.isArray(info[err.propertyPath])) {
info[err.propertyPath].push(err);
} else {
info[err.propertyPath] = [ info[err.propertyPath], err ];
}
}
/** @type {{ error: AppError }} */
return {
error: AppError.validationError("validator.error", info),
};
}
/** @type {{ value: CodeGenUuidType}} */
return { value: result.value };
}
