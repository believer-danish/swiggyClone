import { sum } from "../sum";

test("sum of two number", () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
