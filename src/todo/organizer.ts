import { ITodo } from "./todo";
import { NotificationFactory } from "./notification";

export class Organizer {
  private emailNotification = new NotificationFactory().createEmailNotification();
  private smsNotification = new NotificationFactory().createSMSNotification();
  private finished: ITodo[] = [];
  private todo: ITodo[] = [];
  private doing: ITodo[] = [];

  // constructor() {}

  addViaEmailTask(task: ITodo): void {
    this.todo.push(task);
    this.emailNotification.send({
      recipient: task.source,
      title: `New todo item: ${task.title}`,
      description: task.description,
    });
  }
  addViaSmsTask(task: ITodo): void {
    this.todo.push(task);
    this.smsNotification.send({
      recipient: task.source,
      title: `New todo item: ${task.title}`,
      description: task.description,
    });
  }
}
