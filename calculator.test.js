const {calculate} = require("./calculator");

test("Adds 1+2 to additionResult 3", () => {
  expect(sum(1, 2)).toBe(additionResult);
});


test("multiply additionResult*2 to equal 2", () => {
  expect(multiply(additionResult, 2)).toBe(multiplicationResult);
});


test("divide multiplicationResult/2 to equal 1", () => {
  expect(divide(multiplicationResult, 2)).toBe(divide);
});
