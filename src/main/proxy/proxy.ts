import { TodoList } from "../todo/single";
import { ITodoSystem } from "../todo/types";
import { ISource } from "../source";
import { IUserList, UserType } from "./types";
import { UserHandlerBuilder, IUserHandler } from "./user";

/**
 * Proxy
 */
export class TodoListProxy implements ITodoSystem {
  private static instance: TodoListProxy;
  private todoList: TodoList;
  private users: IUserList = {
    invalidTocken: UserType.unregisteredUser,
    validTocken: UserType.registeredUser,
  };

  private checkIfUnregistered: IUserHandler;
  private checkIfRegistered: IUserHandler;

  private currentUser = "";

  private constructor() {
    this.todoList = TodoList.getInstance();

    this.checkIfUnregistered = UserHandlerBuilder.getInstance(
      this.users,
      UserType.unregisteredUser
    );
    this.checkIfRegistered = UserHandlerBuilder.getInstance(
      this.users,
      UserType.registeredUser
    );
  }
  setTodoSource(source: ISource): void {
    if (this.checkIfUnregistered.execute(this.currentUser)) {
      console.log("Access denied!");
      return;
    }

    this.todoList.setTodoSource(source);
  }

  addToEat(food: string, description: string): void {
    if (this.checkIfUnregistered.execute(this.currentUser)) {
      console.log("Access denied!");
      return;
    }
    this.todoList.addToEat(food, description);
  }

  addToGetGrocery(grocery: string, description: string): void {
    if (this.checkIfUnregistered.execute(this.currentUser)) {
      console.log("Access denied!");
      return;
    }
    this.todoList.addToGetGrocery(grocery, description);
  }

  addToRead(book: string, description: string): void {
    if (this.checkIfUnregistered.execute(this.currentUser)) {
      console.log("Access denied!");
      return;
    }
    this.todoList.addToRead(book, description);
  }

  addToWork(task: string, description: string): void {
    if (this.checkIfUnregistered.execute(this.currentUser)) {
      console.log("Access denied!");
      return;
    }
    this.todoList.addToWork(task, description);
  }

  public static getInstance(): TodoListProxy {
    if (!TodoListProxy.instance) {
      TodoListProxy.instance = new TodoListProxy();
    }

    return TodoListProxy.instance;
  }

  authoriseAndRun(user: string, fn: () => void) {
    this.currentUser = user;
    fn();
    this.currentUser = "";
  }
}
