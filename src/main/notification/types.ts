export enum NotificationType {
  sms,
  email,
  push,
}

export interface INotification {
  send(props: INotificationProps): void;
}

export interface INotificationProps {
  title: string;
  description: string;
  recipient: string;
}
