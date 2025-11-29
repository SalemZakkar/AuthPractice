import {
  MongooseQuery,
  setQueriesFromParsedQuery,
} from "../../core/db/mongoose-queries-util";
import { IUser, IUserInput } from "./user-interface";
import { UserModel } from "./user-model";

export class UserService {
  async createUser(user: IUserInput): Promise<IUser> {
    let res = await UserModel.insertOne(user);
    return res;
  }

  async getUsers(params: MongooseQuery) {
    let query = setQueriesFromParsedQuery(params, UserModel.find());    
    return await query;
  }
}
