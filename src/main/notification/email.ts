import { INotification, INotificationProps } from "./types";

export class EmailNotification implements INotification {
  system: any;

  constructor(emailSystemDependency: any) {
    this.system = {
      MakeEmailRequest: (props: INotification) => null,
    };
  }

  send(props: INotificationProps): void {
    this.system.MakeEmailRequest(props);
    console.log(
      `New notification from ${props.recipient} about "${props.title}" via Email`
    );
  }
}
