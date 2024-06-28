const calculate = require("./calculator");

test("calculate (1+2)*3/2 to equal 4.5", () => {
  expect(calculate(1,2,3)).toBe(4.5);
});

