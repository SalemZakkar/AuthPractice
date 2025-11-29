import mongoose from "mongoose";

export interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  password?: string;
  salt?: number;
  email: string;
  age: number;
  googleId?: string;
}

export interface IUserInput {
  _id?: mongoose.Types.ObjectId;
  name: string;
  password?: string;
  passwordConfirmation?: string;
  salt?: number;
  email: string;
  age: number;
  googleId?: string;
}
