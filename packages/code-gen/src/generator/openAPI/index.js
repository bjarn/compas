import { readFileSync } from "fs";
import { pathJoin } from "@compas/stdlib";

/**
 * @type {any}
 */
const OPENAPI_SPEC_TEMPLATE = {
  openapi: "3.0.1",
  servers: [],
  tags: [],
  paths: {},
  components: {
    parameters: {},
    schemas: {
      AppError: {
        type: "object",
        description: "https://compasjs.com/api/stdlib.html#AppError",
        properties: {
          info: {
            type: "object",
          },
          key: {
            type: "string",
          },
          status: {
            type: "number",
          },
        },
      },
    },
  },
};

/**
 * @param {CodeGenStructure} structure
 * @param {GenerateOpenApiOpts} options
 * @returns {string}
 */
export function generateOpenApiFile(structure, options) {
  const openApiSpec = { ...OPENAPI_SPEC_TEMPLATE };

  for (const group of options.enabledGroups) {
    const groupStructure = structure[group];

    /**
     * @type {CodeGenRouteType[]}
     */
    // @ts-ignore
    const groupRoutes = Object.values(groupStructure).filter(
      (it) => it.type === "route",
    );

    if (groupRoutes.length === 0) {
      continue;
    }

    // ensure tag
    const hasTag = openApiSpec.tags.find((it) => it.name === group);
    if (!hasTag) {
      openApiSpec.tags.push({
        name: group,
        description: "", // TODO implement route/group docs (when impl)
      });
    }

    for (const route of groupRoutes) {
      // define endpoint
      const method = `${route?.method ?? "GET"}`.toLowerCase();
      const path = route.path.charAt(0) === "/" ? route.path : `/${route.path}`; // TODO investigate
      openApiSpec.paths[path] = {
        [method]: {
          tags: [route.group],
          summary: route.docString,
          operationId: route.name,
          ...generateParams(structure, route),
          ...generateBody(structure, route),
          ...generateResponse(structure, route),
          // TODO implement route.files
        },
      };
    }
  }

  // determine compas version
  const compasVersion = parseCompasVersionNumber();
  openApiSpec[
    "x-generator"
  ] = `Compas (https://compasjs.com) v${compasVersion}`;

  // set meta
  openApiSpec.info = {
    title: `${options?.openApiOptions?.title ?? process.env.APP_NAME}`,
    description: options?.openApiOptions?.description ?? "",
    version: options?.openApiOptions?.version ?? "0.0.0",
  };

  return JSON.stringify(openApiSpec, null, 2);
}

/**
 * @param {CodeGenStructure} structure
 * @param {CodeGenRouteType} route
 */
function generateResponse(structure, route) {
  const contentAppError = {
    "application/json": {
      schema: {
        $ref: "#/components/schemas/AppError",
      },
    },
  };

  // document all non 200 status codes, controlled by compas itself
  const defaultResponses = {
    400: {
      description: "Validation Error",
      content: contentAppError,
    },
    401: {
      description: "Unauthorized Error",
      content: contentAppError,
    },
    404: {
      description: "Not Found Error",
      content: contentAppError,
    },
    405: {
      description: "Not Implemented Error",
      content: contentAppError,
    },
    500: {
      description: "Internal Server Error",
      content: contentAppError,
    },
  };

  // 200 behaviour
  const response = {
    description: route.response?.docString ?? "",
    schema: {},
  };

  if (route.response?.reference) {
    response.schema = {
      $ref: `#/definitions/${route.response.reference.uniqueName}`,
    };
  }

  return {
    responses: {
      200: response,
      ...defaultResponses,
    },
  };
}

/**
 * @param {CodeGenStructure} structure
 * @param {CodeGenRouteType} route
 */
function generateParams(structure, route) {
  if (!route?.params) {
    return {};
  }

  // TODO add support for refs

  const field = route.params.reference;
  if (field.type !== "object") {
    return {};
  }

  const parameters = [];
  for (const [key, param] of Object.entries(field?.keys ?? {})) {
    parameters.push({
      name: key,
      description: param.docString,
      required: !param.isOptional,
      in: "path",
      schema: {
        type: param.type,
        minimum: param?.validator?.min,
        maximum: param?.validator?.max,
      },
    });
  }

  return { parameters };
}

/**
 * @param {CodeGenStructure} structure
 * @param {CodeGenRouteType} route
 */
function generateBody(structure, route) {
  if (!route?.body) {
    return {};
  }

  const content = {};
  if (route.body?.reference) {
    content.schema = {
      $ref: `#/components/schemas/${route.body.reference.uniqueName}`,
    };
  }

  return {
    requestBody: {
      description: route.body.docString ?? "",
      content: { "application/json": content },
      required: true,
    },
  };
}

/**
 * @returns {string}
 */
function parseCompasVersionNumber() {
  const { version } = JSON.parse(
    readFileSync(
      // take on of the packages for reference
      pathJoin(process.cwd(), "./node_modules/@compas/code-gen/package.json"),
      "utf-8",
    ),
  );

  return version ?? "0.0.1";
}
