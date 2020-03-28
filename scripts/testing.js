import { newLogger } from "@lbu/insight";
import { AppError, createBodyParsers, getApp } from "@lbu/server";
import { mainFn } from "@lbu/stdlib";
import { router } from "../generated/router.js";
import { validatorSetErrorFn } from "../generated/validators.js";

mainFn(import.meta, newLogger(), main);

async function main(logger) {
  const app = getApp({
    errorOptions: {
      leakError: true,
    },
    headers: {
      cors: {
        origin: "http://localhost:3000",
      },
    },
  });

  createBodyParsers();
  validatorSetErrorFn(AppError.validationError);

  app.use(router);

  app.listen(3000, () => {
    logger.info("Listening...");
  });

  mount();
}

function mount() {}
