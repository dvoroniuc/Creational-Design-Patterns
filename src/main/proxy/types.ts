export enum UserType {
  unregisteredUser,
  registeredUser,
}

export interface IUserList {
  [key: string]: UserType;
}
