export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function convertStringToInteger(str) {
  const hasDotsRegex = /\./g;
  const foundDots = str.match(hasDotsRegex);

  if (foundDots.length > 1) {
    throw new Error("Enter a valid number");
  }
  return parseInt(str);
}
