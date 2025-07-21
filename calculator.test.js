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

//  test case for multiple numbers string
test('returns sum of multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

//  test case to check newlines between numbers
test('supports newlines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});