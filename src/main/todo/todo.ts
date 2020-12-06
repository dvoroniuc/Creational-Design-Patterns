import { IChanges, ITodo, TodoType, Status, SubtasksGetter } from "./types";
import { ISubscrivable, ISubscription, Observable } from "../observer";

export class Todo implements ITodo, ISubscrivable {
  private observable: Observable<IChanges>;
  private subtaskGetter: SubtasksGetter = () => [];
  private estimation = 0;
  private _subtasks: number[] = [];
  id: number = 0;
  type: TodoType = TodoType.other;
  title: string = "";
  source: string = "";

  constructor(id: number) {
    this.id = id;
    this.observable = new Observable<IChanges>();
  }
  private _description: string = "";
  public get description(): string {
    return this._description;
  }
  public set description(val: string) {
    this.observable.emit(
      { description: this.description },
      { description: val }
    );
    this._description = val;
  }
  private _status = Status.todo;
  public get status(): Status {
    return this._status;
  }
  public set status(val: Status) {
    this.observable.emit({ status: this.status }, { status: val });
    this._status = val;
  }
  get subtasks(): number[] {
    return this._subtasks;
  }

  setSubtasksGetter(subtasksGetter: SubtasksGetter) {
    this.subtaskGetter = subtasksGetter;
  }

  getSubtaskInstances(): ITodo[] {
    return this.subtaskGetter(this.subtasks);
  }

  getEstimation(): number {
    const subtasksEstimation = this.getSubtaskInstances()
      .map((todo) => todo.getEstimation())
      .reduce((accumulator, current) => accumulator + current);
    return this.estimation + subtasksEstimation;
  }

  subscribe(subscription: ISubscription<IChanges>) {
    return this.observable.subscribe(subscription);
  }
}
