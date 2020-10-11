interface INotification {
  send(props: INotificationProps): void;
}

interface INotificationProps {
  title: string;
  description: string;
  recipient: string;
}

class EmailNotification implements INotification {
  system: any;

  constructor(emailSystemDependency: any) {
    this.system = {
      MakeEmailRequest: (props: INotification) => null,
    };
  }

  send(props: INotificationProps): void {
    this.system.MakeEmailRequest(props);
    console.log(`Notified ${props.recipient} about "${props.title}" via Email`);
  }
}

class SmsNotification implements INotification {
  system: any;

  constructor(smsNotificationDependency: any) {
    this.system = {
      MakeSmsRequest: (props: INotification) => null,
    };
  }

  send(props: INotificationProps): void {
    this.system.MakeSmsRequest(props);
    console.log(`Notified ${props.recipient} about "${props.title}" via SMS`);
  }
}
/**
 *  Factory
 */
export class NotificationFactory {
  createEmailNotification(): INotification {
    const EmailDependency = null;
    return new EmailNotification(EmailDependency);
  }
  createSMSNotification(): INotification {
    const SMSdependency = null;
    return new SmsNotification(SMSdependency);
  }
}
