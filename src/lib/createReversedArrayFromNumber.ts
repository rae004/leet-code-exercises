/**
 * Return an array of numbers that is the reversed number passed as a parameter.
 *
 * @param numbers
 */
const reverseArrayOfDigits = (numbers: number) => {
  if (numbers === 0) return [numbers];
  const res: number[] = [];

  while (numbers) {
    const n = numbers % 10;
    res.push(n);
    numbers = (numbers - n) / 10;
  }

  return res.map((n) => n);
};

export default reverseArrayOfDigits;
