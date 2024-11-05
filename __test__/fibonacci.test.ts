import { generateFibonacci } from "../src/fibonacci";

describe("Checking fibonacci sequence", () => {
  it("Should return fibonacci sequence when n = 5", () => {
    const result = generateFibonacci(5);
    expect(result).toStrictEqual([
      0, 1, 1, 2, 3
    ]);
  });
});
