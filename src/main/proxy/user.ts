import { IUserList, UserType } from "./types";

/**
 * Chain of Responsibility
 */

abstract class UserHandler {
  protected next!: IUserHandler;

  setNext(handler: IUserHandler): void {
    this.next = handler;
  }
}

export interface IUserHandler {
  execute: (user: string) => boolean;
  setNext: (handler: IUserHandler) => void;
}

export class UserExists extends UserHandler implements IUserHandler {
  private userList: IUserList;

  constructor(userlist: IUserList) {
    super();
    this.userList = userlist;
  }

  execute(user: string): boolean {
    if (!this.userList[user]) {
      return false;
    }

    if (this.next) {
      return this.next.execute(user);
    }

    return true;
  }
}

export class UserHasRole extends UserHandler implements IUserHandler {
  private userList: IUserList;
  private role: UserType;

  constructor(userList: IUserList, role: UserType) {
    super();
    this.userList = userList;
    this.role = role;
  }

  execute(user: string): boolean {
    if (this.userList[user] != this.role) {
      return false;
    }

    if (this.next) {
      return this.next.execute(user);
    }

    return true;
  }
}

export class UserHandlerBuilder {
  private static instance: IUserHandler | undefined;

  static getInstance(userList: IUserList, role?: UserType): IUserHandler {
    if (role !== undefined) {
      let pipe = new UserHasRole(userList, role);

      if (this.instance !== undefined) {
        pipe.setNext(this.instance);
      }
      this.instance = pipe;
    }

    let pipe = new UserExists(userList);
    if (this.instance !== undefined) {
      this.instance.setNext(pipe);
    }

    let result = <IUserHandler>this.instance;
    this.instance = undefined;
    return result;
  }
}
