import { TodoBuilder } from "./todoBuild";
import { ISource } from "./source";
import { Organizer } from "./organizer";

/**
 * Singleton
 */
export class TodoList {
  private static instance: TodoList;
  private constructor() {
    this.TodoBuilder = new TodoBuilder();
    this.Organizer = new Organizer();
  }
  static getInstance() {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList();
    }
    return TodoList.instance;
  }

  private Organizer: Organizer;
  private TodoBuilder: TodoBuilder;

  setTodoSource(source: ISource): void {
    this.TodoBuilder.source = source;
  }

  addToEat(food: string, description: string): void {
    console.log("You need to eat!");
    const todo = this.TodoBuilder.createEatItem();
    todo.title = food;
    todo.description = description;
    this.Organizer.addViaEmailTask(todo);
  }

  addToGetGrocery(grocery: string, description: string): void {
    console.log("You need to get groceries!");
    const todo = this.TodoBuilder.createGroceryItem();
    todo.title = grocery;
    todo.description = description;
    this.Organizer.addViaSmsTask(todo);
  }

  addToRead(book: string, description: string): void {
    console.log("You need to read this book!");
    const todo = this.TodoBuilder.createReadItem();
    todo.title = book;
    todo.description = description;
    this.Organizer.addViaEmailTask(todo);
  }

  addToWork(task: string, description: string): void {
    console.log("You need to solve this issue!");
    const todo = this.TodoBuilder.createWorkItem();
    todo.title = task;
    todo.description = description;
    this.Organizer.addViaEmailTask(todo);
  }
}
