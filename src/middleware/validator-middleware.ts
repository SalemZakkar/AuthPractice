import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { AppInputError } from "../utils/errors";
export function validateJsonBody(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    let { error } = schema.validate(req.body);
    
    if (error) {
      throw new AppInputError(error.message);
    } else {
      next();
    }
  };
}
