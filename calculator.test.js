const { add } = require("./stringCalculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test('returns number for single input', () => {
  expect(add("8")).toBe(8);
});