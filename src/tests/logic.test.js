import { expect, test } from "vitest";
import { todoFunctions } from "../logic";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("add todo increasing array by one item", () => {
  const state = [];
  const newTodo = { description: "Example1" };

  const newState = todoFunctions.addTodo(state, newTodo);

  expect(newState).toHaveLength(1);
  expect(newState[0]).toEqual({
    id: 1,
    description: "Example1",
  });
});

test("add todo increasing does not delete old entries", () => {
  const state = [{ id: -1, description: "Example1" }];

  const newTodo = { description: "Example2" };
  const newState = todoFunctions.addTodo(state, newTodo);

  expect(newState).toHaveLength(2);
  expect(newState[0]).toEqual({
    id: -1,
    description: "Example1",
  });
  expect(newState[1]).toEqual({
    id: 2,
    description: "Example2",
  });
});
test("delete todo decrease array by one item", () => {
  const state = [{ id: 1, description: "Example1" }];
  const idToDelete = 1;
  const newState = todoFunctions.deleteTodo(state, idToDelete);
  expect(newState).toHaveLength(0);
});

test("delete todo from array with length [2]", () => {
  const state = [
    { id: 1, description: "Example1" },
    { id: 2, description: "Example2" },
  ];
  const idToDelete = 2;
  const newState = todoFunctions.deleteTodo(state, idToDelete);
  expect(newState).toHaveLength(1);
  expect(newState[0]).toEqual({
    id: 1,
    description: "Example1",
  });
});

test("delete todo from array with length [4]", () => {
  const state = [
    { id: 1, description: "Example1" },
    { id: 2, description: "Example2" },
    { id: 3, description: "Example3" },
    { id: 4, description: "Example4" },
  ];
  const idToDelete = 3;
  const newState = todoFunctions.deleteTodo(state, idToDelete);
  expect(newState).toHaveLength(3);
  expect(newState[0]).toEqual({
    id: 1,
    description: "Example1",
  });
  expect(newState[2]).toEqual({
    id: 4,
    description: "Example4",
  });
});

test("delete 2 todo from array with length [4]", () => {
  const state = [
    { id: 1, description: "Example1" },
    { id: 2, description: "Example2" },
    { id: 3, description: "Example3" },
    { id: 4, description: "Example4" },
  ];
  const newState = todoFunctions.deleteTodo(state, 3);
  const newState2 = todoFunctions.deleteTodo(newState, 1);
  expect(newState2).toHaveLength(2);
  expect(newState2[0]).toEqual({
    id: 2,
    description: "Example2",
  });
  expect(newState2[1]).toEqual({
    id: 4,
    description: "Example4",
  });
});
test("mark Finished tasks With doen", () => {
  const state = [
    { id: 1, description: "Example1" },
    { id: 2, description: "Example2" },
  ];
  const idToMark = 1;
  const newState = todoFunctions.markTodo(state, idToMark);
  expect(newState).toHaveLength(2);
  expect(newState[0]).toEqual({
    id: 1,
    description: "Example1",
    done: true,
  });
});

test("Sort Array", () => {
  const state = [
    { id: 2, description: "B" },
    { id: 1, description: "A" },
    { id: 3, description: "C" },
  ];

  const sortFunction = (a, b) => {
    const nameA = a.description.toUpperCase(); // ignore upper and lowercase
    const nameB = b.description.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  };

  const newState = todoFunctions.sortTodos(state, sortFunction);
  console.log(newState);
  expect(newState).toHaveLength(3);
  expect(newState[0]).toEqual({
    id: 1,
    description: "A",
  });
  expect(newState[1]).toEqual({
    id: 2,
    description: "B",
  });
  expect(newState[2]).toEqual({
    id: 3,
    description: "C",
  });
});
