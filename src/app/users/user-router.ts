import { Router } from "express";
import { UserController } from "./user-controller";
import { validateJsonQuery } from "../../core";
import { getUsersValidator } from "./user-validator";

let userController = new UserController();

let userRouter = Router();

userRouter.get(
  "/",
  validateJsonQuery(getUsersValidator),
  userController.getUsers
);

export { userRouter };
