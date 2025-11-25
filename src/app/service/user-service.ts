import { IUser, IUserInput } from "../interface/user-interface";
import { UserModel } from "../models/user-model";

export class UserService {
  async createUser(user: IUserInput): Promise<IUser> {
    let res = await UserModel.insertOne(user);
    return res;
  }

  async getUsers(params: object) {
    return UserModel.find(params);
  }
}
