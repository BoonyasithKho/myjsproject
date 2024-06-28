const {calculate,sum,multiple,divide} = require("./calculator");

test("Adds 1+2 to additionResult 3", () => {
  expect(sum(1, 2)).toBe(3);
});


test("multiply additionResult*2 to equal 2", () => {
  expect(multiply(3, 2)).toBe(6);
});


test("divide multiplicationResult/2 to equal 1", () => {
  expect(divide(6, 2)).toBe(3);
});
