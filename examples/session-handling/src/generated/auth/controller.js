// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { AppError } from "@compas/stdlib";
/**
 * @type { {
 * login: (AuthLoginFn|AuthLoginFn[]),
 * logout: (AuthLogoutFn|AuthLogoutFn[]),
 * me: (AuthMeFn|AuthMeFn[]),
 * refreshTokens: (AuthRefreshTokensFn|AuthRefreshTokensFn[]),
 * } }
 */
export const authHandlers = {
  /**
   * POST auth/login
   *
   */
  login: (ctx, next) => {
    throw AppError.notImplemented();
  },

  /**
   * POST auth/logout
   *
   */
  logout: (ctx, next) => {
    throw AppError.notImplemented();
  },

  /**
   * GET auth/me
   *
   */
  me: (ctx, next) => {
    throw AppError.notImplemented();
  },

  /**
   * POST auth/refresh
   *
   */
  refreshTokens: (ctx, next) => {
    throw AppError.notImplemented();
  },
};

export const authTags = {
  login: [],

  logout: [],

  me: [],

  refreshTokens: [],
};
