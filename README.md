## Topic: implementing Creational Design Patterns in todo list app

## Author: Voroniuc Denis

<br />

Created Todo list app using Creational Design Patterns:

1. Singleton
2. Builder
3. Factory

<br />
Using Singleton for creating TodoList
Singleton:

```
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
    todo.payload = food;
    todo.description = description;
    this.Organizer.addViaEmailTask(todo);
  } ......
```

Used Builder for creating todo items

Builder:

```
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
  } ......
```

Used Factory for creating notifications

Factory:

```
export class NotificationFactory {
  createEmailNotification(): INotification {
    const EmailDependency = null;
    return new EmailNotification(EmailDependency);
  }
  createSMSNotification(): INotification {
    const SMSdependency = null;
    return new SmsNotification(SMSdependency);
  }
} ......
```
