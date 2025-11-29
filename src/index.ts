import {
  getAppErrorsApi,
  initDB,
} from "./core";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import { errorMiddleWare } from "./core";
import { authRouter } from "./app/auth/auth-router";
import * as qs from "qs";
import { userRouter } from "./app/users/user-router";
initDB();

let app = express();

app.use(express.json());

app.set("query parser", (str: string) => qs.parse(str));

app.use("/auth", authRouter);

app.use("/users", userRouter);

app.use("/errors" , getAppErrorsApi)

app.use(errorMiddleWare);

app.listen(process.env.PORT, () => {
  console.log("Server is running on 3000");
});
