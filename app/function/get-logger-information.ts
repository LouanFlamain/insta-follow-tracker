import { UserInfoType } from "../../types/variable";

import dotenv from "dotenv";
dotenv.config();

export const GetLoggerInformation = (): UserInfoType => {
  let data: UserInfoType = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  };
  return data;
};
