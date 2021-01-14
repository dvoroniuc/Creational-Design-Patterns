## Topic: implementing Creational & Structural Design Patterns in todo list app

## Author: Voroniuc Denis

<br />

Created Todo list app using Creational & Structural Design Patterns:

1. Singleton
2. Builder
3. Factory
4. Decorator
5. Composite
6. Proxy
7. Observer
8. Chain of Responsibility

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

Used Decorator to add new functionality to an existing object without altering its structure.

Decorator:
Base class:

```
export class NotificationDecorator implements INotification {
  protected wrapee: INotification;

  constructor(wrapee: INotification) {
    this.wrapee = wrapee;
  }

  send(props: INotificationProps) {
    this.wrapee.send(props);
  }
}
```

    Child class:

```
export class SmsNotification implements INotification {
  system: any;
  constructor(smsSystemDependency: any) {
    this.system = {
      MakeSmsRequest: (props: INotification) => null,
    };
  }
  send(props: INotificationProps): void {
    this.system.MakeSmsRequest(props);
    console.log(
      `New notification from ${props.recipient} about "${props.title}" via SMS`
    );
  }
}
```

Used Composite Pattern to treat a group of objects in similar way as a single object
Composite Pattern:

```
getEstimation(): number {
    const subtasksEstimation = this.getSubtaskInstances()
        .map(task => task.getEstimation())
        .reduce((current, accumulator) => current + accumulator);
    return this.estimation + subtasksEstimation;
}

```

I Used a Proxy Pattern in order to manage access to a class

```

  addToGetGrocery(grocery: string, description: string): void {
    if (this.checkIfUnregistered.execute(this.currentUser)) {
      console.log("Access denied!");
      return;
    }
    this.todoList.addToGetGrocery(grocery, description);
  }

...

  authoriseAndRun(user: string, fn: () => void) {
    this.currentUser = user;
    fn();
    this.currentUser = "";
  }

```

```
    const registeredUser = "validTocken";
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToGetGrocery("bread", "I need to buy bread for the dinner")
    );

```
