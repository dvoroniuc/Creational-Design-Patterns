import { NotificationDecorator } from "./decorator";
import { INotificationProps } from "./types";
import { PushNotification } from "./push";

export class PushNotificationDecorator extends NotificationDecorator {
  private service = new PushNotification(null);

  send(props: INotificationProps) {
    this.service.send(props);
    super.send(props);
  }
}
