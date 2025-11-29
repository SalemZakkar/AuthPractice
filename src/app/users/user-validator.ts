import Joi from "joi";
import { numberQueryValidator, stringQueryValidator } from "../../core";

export const getUsersValidator = Joi.object({
  email: stringQueryValidator,
  age: numberQueryValidator,
  skip: Joi.number(),
  limit: Joi.number()
});
