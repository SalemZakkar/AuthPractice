import { AppErrorCodes } from "./error-codes";
import { buildError } from "./exception";

export enum SystemErrors {
  JsonParseError = "01",
}

buildError(AppErrorCodes.system, [
  {
    code: SystemErrors.JsonParseError,
    message: "Json Parse Error",
    statusCode: 400,
  },
]);
