import { INotification, INotificationProps } from "./types";

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
