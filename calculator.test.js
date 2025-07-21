const { add } = require("./calculator");

// test case to check error for non string params
test('throws error on non string values', () => {
  expect(() => add(1)).toThrow("Please enter valid number");
});

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

// test case for multiple numbers string
test('returns sum of multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

// test case to check newlines between numbers
test('supports newlines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

// test case to check custom delimiter
test('supports custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

// test case to check error for negative numbers
test('throws error on negative numbers', () => {
  expect(() => add("1,-2,-5")).toThrow("negative numbers not allowed -2,-5");
});