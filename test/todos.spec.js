const { fetchTodos, printTodos } = require("../src/todos");

describe("Fetching Todos", () => {
  it("should fetch correct number of todos", async () => {
    expect((await fetchTodos(5)).length).toBe(5);
  });

  it("should only fetch even todos", async () => {
    expect((await fetchTodos(5)).filter((todo) => todo.id % 2 !== 0).length).toBe(0);
  });

  it("should throw an error if n is not a number", async () => {
    expect(fetchTodos("not a number")).rejects.toThrow("Invalid number of todos");
  });

  it("should throw an error if n is less than or equal to 0", async () => {
    expect(fetchTodos(0)).rejects.toThrow("Invalid number of todos");
  });

  it("should throw an error if n is 100 or bigger", async () => {
    expect(fetchTodos(100)).rejects.toThrow("Too Many todos");
  });
});

describe("Printing Todos", () => {
  it("should only print title and completed", () => {
    console.table = jest.fn();

    const todos = [
      { userId: 1, id: 1, title: "todo1", completed: false },
      { userId: 2, id: 2, title: "todo2", completed: false },
    ];

    printTodos(todos);
    expect(console.table).toHaveBeenCalledWith(todos, ["title", "completed"]);
  });

  it("should throw an error if todos is not an array", () => {
    expect(() => printTodos("not an array")).toThrow("Todos must be an array");
  });
});
