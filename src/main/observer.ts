/**
 * Observer
 */

export type ISubscription<T> = (prev: T, current: T) => void;

export interface ISubscrivable {
  subscribe: (subscription: ISubscription<any>) => () => void;
}

export class Observable<T> {
  private subscribers: ISubscription<T>[] = [];

  private unsubscribe(subscriber: ISubscription<T>) {
    this.subscribers = this.subscribers.filter((item) => item != subscriber);
  }

  subscribe(subscriber: ISubscription<T>): () => void {
    this.subscribers.push(subscriber);

    return () => this.unsubscribe(subscriber);
  }

  emit(prev: T, current: T) {
    this.subscribers.forEach((subscription) => subscription(prev, current));
  }
}
