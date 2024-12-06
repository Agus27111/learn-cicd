import { generateFibonacci } from "../src/fibonacci";

describe("Checking fibonacci sequence", () => {
  it("Should return fibonacci sequence when n = 5", () => {
    const result = generateFibonacci(5);
    expect(result).toStrictEqual([0, 1, 1, 2, 3]);
  });

  it("Should return [0] when n = 0", () => {
    const result = generateFibonacci(0);
    expect(result).toStrictEqual([0]);
  });

  it("Should return [1] when n = 1", () => {
    const result = generateFibonacci(1);
    expect(result).toStrictEqual([1]);
  });

  it("Should return fibonacci sequence when n = 2", () => {
    const result = generateFibonacci(2);
    expect(result).toStrictEqual([0, 1]);
  });

  it("Should return fibonacci sequence when n = 10", () => {
    const result = generateFibonacci(10);
    expect(result).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
