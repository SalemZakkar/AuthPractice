import { Response, Request, NextFunction, RequestHandler } from "express";
import { AppDupicateError, AppInputError } from "./errors";
import mongoose from "mongoose";

type RH = (req: Request, res: Response, next: NextFunction) => any;

let handler =
  (fn: RH) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.resolve(fn(req, res, next));
    } catch (e) {
      if ((e as any).code == 11000) {
        next(new AppDupicateError(Object.keys((e as any).keyValue)[0]));
        return;
      }
      if (e instanceof mongoose.Error.ValidationError) {
        next(new AppInputError(e.message));
        return;
      }
      next(e);
    }
  };

export { handler };
