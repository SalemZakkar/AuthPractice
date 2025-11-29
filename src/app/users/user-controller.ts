import { NextFunction, Request, Response } from "express";
import { UserService } from "./user-service";
import { getQueries } from "../../core/db/mongoose-queries-util";

let userService = new UserService();

export class UserController {
  getUsers = async (req: Request, res: Response, next: NextFunction) => {

    let users = await userService.getUsers(getQueries(req.query));
    res.status(200).json({ data: users });
  };
}
