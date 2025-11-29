import { Router } from "express";
import { validateJsonBody } from "../../core";
import { AuthController } from "./auth-controller";
import { authSignInValidator, authSignUpValidator } from "./auth-validator";

let authRouter = Router();

let authController = new AuthController();

authRouter.post(
  "/signUp",
  validateJsonBody(authSignUpValidator),
  authController.signUp
);

authRouter.post(
  "/signIn",
  validateJsonBody(authSignInValidator),
  authController.signIn
);

export { authRouter };
