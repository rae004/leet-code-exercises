const createIntFromArray = (array: number[]): number => {
  let number = 0;

  array.forEach((num) => {
    number = number * 10 + num;
  });

  return number;
};

export default createIntFromArray;
