export const diffInPercentage = (a: number, b: number): number => {
  return 100 * Math.abs((a - b) / ((a + b) / 2));
};
