import { expect, test } from "vitest";
import { convertStringToInteger, multiply, sum } from "../logic.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 4 + 4 to equal 8", () => {
  const sumResult = sum(4, 4);
  expect(sumResult).toBe(8);
});

test("multiply 2 x 2 = 4", () => {
  const result = multiply(2, 2);

  expect(result).toBe(4);
});

test("'100.5' should become 100", () => {
  const result = convertStringToInteger("100.5");

  expect(result).toBe(100);
});

test("'100.5.0.0.0' should throw an error with message", () => {
  // try {
  //   const result = convertStringToInteger("100.5.0.0.0");
  // } catch (e) {
  //   // const err = e;
  //   // expect(result).toThrow();
  //   expect(e.message).toBe("Enter a valid number");
  // }

  expect(() => convertStringToInteger("100.5.0.0.0")).toThrowError(
    new Error("Enter a valid number")
  );
});
