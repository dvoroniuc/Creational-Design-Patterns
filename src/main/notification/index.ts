import { INotification, INotificationProps, NotificationType } from "./types";
import { EmailNotification } from "./email";
import { SmsNotification } from "./sms";
import { PushNotification } from "./push";
import { PushNotificationDecorator } from "./pushDecorator";
import { SmsNotificationDecorator } from "./smsDecotaror";

/**
 *  Factory
 */
export class NotificationFactory {
  createEmailNotificationService(): INotification {
    const EmailDependency = null;
    return new EmailNotification(EmailDependency);
  }
  createSMSNotificationService(): INotification {
    const SMSdependency = null;
    return new SmsNotification(SMSdependency);
  }
  createPushotificationService(): INotification {
    const PushDependency = null;
    return new PushNotification(PushDependency);
  }

  createCombinedNotificationService(types: NotificationType[]): INotification {
    let theDefault = this.createEmailNotificationService();

    if (types.includes(NotificationType.push)) {
      theDefault = new PushNotificationDecorator(theDefault);
    }

    if (types.includes(NotificationType.sms)) {
      theDefault = new SmsNotificationDecorator(theDefault);
    }

    return theDefault;
  }
}
