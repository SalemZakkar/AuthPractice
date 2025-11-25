import { handler } from "../../utils";
import { UserService } from "../service/user-service";

let userService = new UserService();

export const test = handler(async (req, res, next) => {
  await userService.createUser({
    age: 5,
    email: "email@email.com",
    name: "Salem sas",
  });
});
