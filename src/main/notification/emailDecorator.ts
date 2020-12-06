import { NotificationDecorator } from "./decorator";
import { INotificationProps } from "./types";
import { EmailNotification } from "./email";

export class EmailNotificationDecorator extends NotificationDecorator {
  private service = new EmailNotification(null);

  send(props: INotificationProps) {
    this.service.send(props);
    super.send(props);
  }
}
