import { TodoList } from "./todo/single";

const MyTodoLIst = TodoList.getInstance();
MyTodoLIst.setTodoSource({
  univercity: "UTM",
  work: "Work field here",
  life: "My life",
});

MyTodoLIst.addToEat("vegetables", "I need to eat vegetables to be healthy");
MyTodoLIst.addToGetGrocery("bread", "I need to buy bread for the dinner");
MyTodoLIst.addToWork(
  "feature",
  "I need to implement this feature in order to finish this sprint"
);
MyTodoLIst.addToRead(
  "Design Patterns: Elements of Reusable Object-Oriented Software",
  "I need to to read a book in order to finish my laboratory work"
);
