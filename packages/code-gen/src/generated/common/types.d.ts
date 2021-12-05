// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

export type CodeGenAnyOfType = {
  type: "anyOf";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {};
  values: CodeGenType[];
};
export type CodeGenType =
  | CodeGenAnyType
  | CodeGenAnyOfType
  | CodeGenArrayType
  | CodeGenBooleanType
  | CodeGenDateType
  | CodeGenFileType
  | CodeGenGenericType
  | CodeGenNumberType
  | CodeGenObjectType
  | CodeGenReferenceType
  | CodeGenRelationType
  | CodeGenStringType
  | CodeGenUuidType
  | CodeGenRouteType;
export type CodeGenAnyType = {
  type: "any";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean };
  internalSettings: {};
  rawValue?: undefined | string;
  rawValueImport: {
    javaScript?: undefined | string;
    typeScript?: undefined | string;
  };
  rawValidator?: undefined | string;
  rawValidatorImport: {
    javaScript?: undefined | string;
    typeScript?: undefined | string;
  };
};
export type CodeGenArrayType = {
  type: "array";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {
    convert: boolean;
    min?: undefined | number;
    max?: undefined | number;
  };
  internalSettings: {};
  values: CodeGenType;
};
export type CodeGenBooleanType = {
  type: "boolean";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { convert: boolean; allowNull: boolean };
  internalSettings: {};
  oneOf?: undefined | boolean;
};
export type CodeGenDateType = {
  type: "date";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {
    allowNull: boolean;
    min?: undefined | Date;
    max?: undefined | Date;
    inFuture?: undefined | boolean;
    inPast?: undefined | boolean;
  };
  internalSettings: {};
};
export type CodeGenFileType = {
  type: "file";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { mimeTypes?: undefined | string[] };
  internalSettings: {};
};
export type CodeGenGenericType = {
  type: "generic";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {};
  keys: CodeGenType;
  values: CodeGenType;
};
export type CodeGenNumberType = {
  type: "number";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {
    convert: boolean;
    floatingPoint: boolean;
    min?: undefined | number;
    max?: undefined | number;
    allowNull: boolean;
  };
  internalSettings: {};
  oneOf?: undefined | number[];
};
export type CodeGenObjectType = {
  type: "object";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean; strict: boolean };
  internalSettings: {};
  shortName?: undefined | string;
  keys: { [key: string]: CodeGenType };
  enableQueries: boolean;
  queryOptions?:
    | undefined
    | {
        withSoftDeletes: boolean;
        withDates: boolean;
        withPrimaryKey: boolean;
        isView: boolean;
        schema: string;
      };
  relations: CodeGenRelationType[];
  where?:
    | undefined
    | {
        type: string;
        rawType: CodeGenObjectType;
        fields: {
          key: string;
          name: string;
          isRelation: boolean;
          variant:
            | "equal"
            | "notEqual"
            | "in"
            | "notIn"
            | "greaterThan"
            | "lowerThan"
            | "isNull"
            | "isNotNull"
            | "includeNotNull"
            | "like"
            | "iLike"
            | "notLike"
            | "exists"
            | "notExists";
        }[];
      };
  orderBy?:
    | undefined
    | {
        type: string;
        specType: string;
        fields: { key: string; optional: boolean }[];
      };
  partial?:
    | undefined
    | {
        insertType: string;
        updateType: string;
        fields: {
          key: string;
          defaultValue?: undefined | string;
          hasSqlDefault: boolean;
          isJsonb: boolean;
        }[];
      };
};
export type CodeGenRelationType = {
  type: "relation";
  subType: "manyToOne" | "oneToMany" | "oneToOne" | "oneToOneReverse";
  reference: CodeGenReferenceType;
  ownKey: string;
  referencedKey?: undefined | string;
  isOptional: boolean;
};
export type CodeGenReferenceType = {
  type: "reference";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {};
  reference:
    | CodeGenType
    | {
        uniqueName?: undefined | string;
        group?: undefined | string;
        name?: undefined | string;
      };
};
export type CodeGenStringType = {
  type: "string";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {
    convert: boolean;
    trim: boolean;
    lowerCase: boolean;
    upperCase: boolean;
    min: number;
    max?: undefined | number;
    pattern?: undefined | string;
    allowNull: boolean;
    disallowedCharacters?: undefined | string[];
  };
  internalSettings: {};
  oneOf?: undefined | string[];
};
export type CodeGenUuidType = {
  type: "uuid";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean };
  internalSettings: {};
};
export type CodeGenRouteType = {
  type: "route";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: { requestBodyType?: undefined | "json" | "form-data" };
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  idempotent: boolean;
  path: string;
  tags: string[];
  query?: undefined | CodeGenType;
  params?: undefined | CodeGenType;
  body?: undefined | CodeGenType;
  files?: undefined | CodeGenType;
  response?: undefined | CodeGenType;
};
export type CodeGenContext = {
  options: import("../../App").GenerateOpts;
  structure: CodeGenStructure;
  extension: ".js" | ".ts";
  importExtension: string;
  outputFiles: CodeGenFile[];
  errors: (
    | { key: "structureReservedGroupName"; groupName: string }
    | { key: "structureUnknownOrEmptyGroup"; groupName: string }
    | { key: "sqlMissingPrimaryKey"; typeName: string }
    | {
        key: "sqlForgotEnableQueries";
        typeName: string;
        referencedByType: string;
      }
    | {
        key: "sqlMissingOneToMany";
        referencedByGroup: string;
        referencedByType: string;
        typeName: string;
        relationOwnKey: string;
      }
    | {
        key: "sqlUnusedOneToMany";
        type: string;
        referencedType: string;
        ownKey: string;
      }
    | { key: "sqlEnableValidator" }
    | {
        key: "sqlDuplicateShortName";
        shortName: string;
        firstName: string;
        secondName: string;
      }
    | { key: "sqlReservedRelationKey"; type: string; ownKey: string }
    | { key: "sqlUsedRelationKey"; type: string; ownKey: string }
  )[];
};
export type CodeGenStructure = {
  [key: string]: { [key: string]: CodeGenType };
};
export type CodeGenFile = { relativePath: string; contents: string };
export type CodeGenTemplateState = { phase: "init" | "collect" | "finish" };
export type CodeGenTypeSettings = {
  isJSON?: undefined | boolean;
  nestedIsJSON?: undefined | boolean;
  useDefaults?: undefined | boolean;
  useTypescript?: undefined | boolean;
  isNode?: undefined | boolean;
  isBrowser?: undefined | boolean;
  suffix?: undefined | string;
  isCommonFile?: undefined | boolean;
  isTypeFile?: undefined | boolean;
  fileTypeIO?: undefined | "input" | "outputRouter" | "outputClient";
};