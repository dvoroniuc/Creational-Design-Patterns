import { NotificationDecorator } from "./decorator";
import { INotificationProps } from "./types";
import { SmsNotification } from "./sms";

export class SmsNotificationDecorator extends NotificationDecorator {
  private service = new SmsNotification(null);

  send(props: INotificationProps) {
    this.service.send(props);
    super.send(props);
  }
}
