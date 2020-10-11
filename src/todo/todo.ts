export enum TodoType {
  grocery = "grocery",
  read = "read a book",
  eat = "eat",
  work = "to finish the tasc",
  other = "other",
}

export interface ITodo {
  id: number;
  type: TodoType;
  payload: string;
  description: string;
  source: string;
}

export class Todo implements ITodo {
  id: number = 0;
  type: TodoType = TodoType.other;
  payload: string = "";
  description: string = "";
  source: string = "";

  constructor(id: number) {
    this.id = id;
  }
}
