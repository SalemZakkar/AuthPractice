import { Router } from "express";
import { validateJsonBody } from "../../middleware";
import { authSignUpValidator } from "../validators";
import { AuthController } from "../controller";

let authRouter = Router();

let authController = new AuthController();

authRouter.post(
  "/signUp",
  validateJsonBody(authSignUpValidator),
  authController.signUp
);

export { authRouter };
