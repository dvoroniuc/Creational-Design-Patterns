import { Todo, TodoType, ITodo } from "./todo";
import { ISource } from "./source";

/**
 *  Builder
 */
export class TodoBuilder {
  source: ISource = {
    univercity: "",
    work: "",
    life: "",
  };

  constructor(source?: ISource) {
    this.todo = new Todo(this.counter++);
  }

  private counter = 0;
  private todo: Todo;

  private reset(): void {
    this.todo = new Todo(this.counter++);
  }

  private getNewTodoInstance(): Todo {
    const res = this.todo;
    this.reset();
    return res;
  }

  createEatItem(): ITodo {
    const res = this.getNewTodoInstance();
    res.type = TodoType.eat;
    res.source = this.source.life;
    console.log(`Add to eat`);
    return res;
  }

  createGroceryItem(): ITodo {
    const res = this.getNewTodoInstance();
    res.type = TodoType.grocery;
    res.source = this.source.life;
    console.log(`Add to get grocery`);
    return res;
  }

  createReadItem(): ITodo {
    const res = this.getNewTodoInstance();
    res.type = TodoType.read;
    res.source = this.source.univercity;
    console.log(`Add to read`);
    return res;
  }

  createWorkItem(): ITodo {
    const res = this.getNewTodoInstance();
    res.type = TodoType.work;
    res.source = this.source.work;
    console.log(`Add to work`);
    return res;
  }
}
