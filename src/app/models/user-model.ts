import { model, Schema } from "mongoose";
import { IUser } from "../interface/user-interface";
import { defaultDbOptions } from "../../db";

let userSchema = new Schema<IUser>(
  {
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    salt: {
      type: Number,
    },
  },
  defaultDbOptions({ hideToJson: ["password", "salt"] })
);

let UserModel = model<IUser>("User", userSchema);

export { UserModel };
