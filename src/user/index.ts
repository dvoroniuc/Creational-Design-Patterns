import { TodoListProxy } from "../main";

export class User {
  run() {
    const mySystem = TodoListProxy.getInstance();

    const unregisteredUser = "invalidTocken";
    const registeredUser = "validTocken";

    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.setTodoSource({
        univercity: "UTM",
        work: "Work field here",
        life: "My life",
      })
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToEat("vegetables", "I need to eat vegetables to be healthy")
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToGetGrocery("bread", "I need to buy bread for the dinner")
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToWork(
        "feature",
        "I need to implement this feature in order to finish this sprint"
      )
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToRead(
        "Design Patterns: Elements of Reusable Object-Oriented Software",
        "I need to to read a book in order to finish my laboratory work"
      )
    );
  }
}
