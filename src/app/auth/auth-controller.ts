import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "../users/user-service";
import {
  AppErrorCodes,
  comparePassword,
  Exception,
  hashPassword,
  signToken,
} from "../../core";
import { AuthErrorCodes } from "./errors";
let userService = new UserService();

export class AuthController {
  salt = 10;
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.password != req.body.passwordConfirmation) {
      throw Exception.get({
        feature: AppErrorCodes.auth,
        code: AuthErrorCodes.PasswordMissmatch,
      });
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
    res.status(201).json({
      token: token,
      data: user,
    });
  };

  signIn = async (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req.body;
    let users = await userService.getUsers({ conditions: {email: email} });
    if (!users) {
      throw Exception.get({
        code: AuthErrorCodes.InvalidCredentials,
        feature: AppErrorCodes.auth,
      });
    }
    if ((await comparePassword(users[0]?.password || "", password)) == false) {
      throw Exception.get({
        code: AuthErrorCodes.InvalidCredentials,
        feature: AppErrorCodes.auth,
      });
    }
    let token = signToken({ _id: users[0]!._id });
    res.status(200).json({
      token: token,
      data: users[0],
    });
  };
}
