import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { AppError } from "../utils";
import { sendError } from "../utils/send-reponse";

function errorMiddleWare(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err instanceof AppError) {
    sendError({ message: err.message, code: err.statusCode, res: res });
    return;
  }
  if (
    (err as any).status == 400 &&
    (err as any).type == "entity.parse.failed"
  ) {
    sendError({ message: "json parse error", code: 400, res: res });
    return;
  }
  sendError({ message: "Internal Server Error.", code: 500, res: res });
}

export { errorMiddleWare };
