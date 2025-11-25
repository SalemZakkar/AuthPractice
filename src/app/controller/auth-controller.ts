import {
  AppDupicateError,
  AppInputError,
  handler,
  hashPassword,
  sendSuccessResponse,
  signToken,
} from "../../utils";

import { UserService } from "../service/user-service";

let userService = new UserService();

export class AuthController {
  salt = 10;
  signUp = handler(async (req, res, next) => {
    let users = await userService.getUsers({ email: req.body.email });
    if (req.body.password != req.body.passwordConfirmation) {
      throw new AppInputError("password mismatch");
    }
    if (users.length > 0) {
      throw new AppDupicateError("email");
    }
    let password = await hashPassword(req.body.password, this.salt);
    let user = await userService.createUser({
      age: req.body.age,
      email: req.body.email,
      name: req.body.name,
      password: password,
      salt: this.salt,
    });
    let token = signToken({ id: user._id });
    sendSuccessResponse({ res: res, token: token, data: user });
  });
}
