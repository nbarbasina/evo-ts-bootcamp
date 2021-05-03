export type CompareFunction<T> = (a: T, b: T) => number;

export const compareNumberFunction: CompareFunction<number> = (
  a: number,
  b: number,
): number => {
  if (a > b) {
    return 1;
  } if (a < b) {
    return -1;
  }
  return 0;
};
