const romanNumerals: Record<string, number> = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

const romanToInt = (s: string): number => {
  const lowerCaseString = s.toLowerCase();
  const array = lowerCaseString.split('');
  const numberArray = array.map((str, index) => {
    if (
      (str === 'i' && array[index + 1] === 'v') ||
      (str === 'i' && array[index + 1] === 'x')
    ) {
      return -1;
    }

    if (
      (str === 'x' && array[index + 1] === 'l') ||
      (str === 'x' && array[index + 1] === 'c')
    ) {
      return -10;
    }

    if (
      (str === 'c' && array[index + 1] === 'd') ||
      (str === 'c' && array[index + 1] === 'm')
    ) {
      return -100;
    }

    return romanNumerals[str];
  });

  return numberArray.reduce((prev, cur) => prev + cur);
};

export default romanToInt;
