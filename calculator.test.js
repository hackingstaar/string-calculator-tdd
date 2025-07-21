const { add } = require("./stringCalculator");

// test case for empty string
test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

// test case for single numbers
test('returns number for single input', () => {
  expect(add("8")).toBe(8);
});

// test case for sum of comma-seprated numbers
test('returns sum of two comma-separated numbers', () => {
  expect(add("6,4")).toBe(10);
});