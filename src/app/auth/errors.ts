import { AppErrorCodes, buildError } from "../../core";

export enum AuthErrorCodes {
  InvalidCredentials = "01",
  InvalidFirebaseUID = "02",
  PasswordMissmatch = "03"
}

buildError(AppErrorCodes.auth, [
  {
    code: AuthErrorCodes.InvalidCredentials,
    message: "Error Credentials",
    statusCode: 400,
  },
  {
    code: AuthErrorCodes.InvalidFirebaseUID,
    message: "Wrong Firebase UID",
    statusCode: 400,
  },
    {
    code: AuthErrorCodes.PasswordMissmatch,
    message: "Password Missmatch",
    statusCode: 400,
  },
]);
