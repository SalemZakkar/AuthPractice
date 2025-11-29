import Joi from "joi";
import { IUserInput } from "../users/user-interface";

const authSignUpValidator = Joi.object<IUserInput>({
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.string().required(),
})
  .required()
  .unknown(false);

const authSignInValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})
  .required()
  .unknown(false);

const signInFirebaseValidator = Joi.object({
  accessToken: Joi.string().required(),
}).unknown(false);

export {
  authSignUpValidator,
  authSignInValidator,
  signInFirebaseValidator as authSignInFirebaseValidator,
};
