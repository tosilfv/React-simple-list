export const cowSum = (cows) => {
  const cowValues = cows.map((cow) => Number(cow.value));
  return cowValues.reduce((acc, curr) => acc + curr, 0);
};
