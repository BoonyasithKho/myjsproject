const sum = require("./sum");

test("Adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});


test("Adds 10+20 to equal 30", () => {
  expect(sum(10, 20)).toBe(30);
});


test("Adds 21+22 to equal 43", () => {
  expect(sum(21, 22)).toBe(43);
});
