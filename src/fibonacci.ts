

export const generateFibonacci = (n: number): number[] => {
  if (n <= 1) {
    return [n];
  }

  let a = 0;
  let b = 1;
  const arr: number[] = [a, b];

  for (let i = 2; i < n; i++) {
    const c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }

  return arr;
}
