import { initDB } from "./db";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import { errorMiddleWare } from "./middleware";
import { authRouter, userRouter } from "./app/routes";
import bodyParser from "body-parser";
initDB();

let app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use(errorMiddleWare);

app.listen(process.env.PORT, () => {
  console.log("Server is running on 3000");
});
