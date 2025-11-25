import { Router } from "express";
import { test } from "../controller/user-controller";

let userRouter = Router();

userRouter.post("/", test);

export { userRouter };
