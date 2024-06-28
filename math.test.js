const sum = require("./math");

test("Adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});


test("multiply 1*2 to equal 2", () => {
  expect(multiply(1, 2)).toBe(2);
});


test("divide 22/22 to equal 1", () => {
  expect(divide(22, 22)).toBe(1);
});

test("divide 22/0 to equal error", () => {
  expect(()=>divide(22, 0)).toThrow('Cannot divide by zero');
});
