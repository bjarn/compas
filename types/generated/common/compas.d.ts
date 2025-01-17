// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import * as cli from "@compas/cli";
import * as codeGen from "@compas/code-gen";
import * as server from "@compas/server";
import * as stdlib from "@compas/stdlib";
import * as store from "@compas/store";

declare global {
  type CliCompletion = cli.CliCompletion;
  type CliResult = cli.CliResult;
  type CliCommandDefinitionInput = cli.CliCommandDefinitionInput;
  type CliExecutorState = cli.CliExecutorState;

  type App = codeGen.App;
  type TypeCreator = codeGen.TypeCreator;
  type RouteCreator = codeGen.RouteCreator;
  type TypeBuilder = codeGen.TypeBuilder;
  type TypeBuilderLike = codeGen.TypeBuilderLike;

  type Application = server.Application;
  type Context<
    StateT = import("koa").DefaultState,
    ContextT = import("koa").DefaultContext,
    ResponseBodyT = unknown,
  > = server.Context<StateT, ContextT, ResponseBodyT>;
  type Next = server.Next;
  type Middleware = server.Middleware;
  type BodyParserPair = server.BodyParserPair;
  type AxiosInstance = import("axios").AxiosInstance;
  type AxiosError = import("axios").AxiosError;
  type AxiosRequestConfig = import("axios").AxiosRequestConfig;

  type AppError = stdlib.AppError;
  type ConfigLoaderOptions = stdlib.ConfigLoaderOptions;
  type ConfigLoaderResult = stdlib.ConfigLoaderResult;
  type InsightEvent = stdlib.InsightEvent;
  type Logger = stdlib.Logger;
  type Either<T, E = AppError> =
    | { value: T; error?: never }
    | { value?: never; error: E };
  type EitherN<T, E = AppError> =
    | { value: T; errors: never }
    | { value: never; errors: E[] };

  type Postgres = store.Postgres;
  type QueryPart<T = any> = store.QueryPart<T>;
  type QueryPartArg = store.QueryPartArg;
  type Returning<
    Type,
    Selector extends undefined | "*" | string[],
  > = store.Returning<Type, Selector>;
  type MinioClient = store.MinioClient;
  type GetStreamFn = store.GetStreamFn;
  type FileCache = store.FileCache;
  type SessionStoreSettings = store.SessionStoreSettings;
  type SessionTransportSettings = store.SessionTransportSettings;
}
