export type UserInfoType = {
  username?: string;
  password?: string;
  [key: string]: string | undefined;
};

export type ValidateUserInfoType = {
  username: string;
  password: string;
};
