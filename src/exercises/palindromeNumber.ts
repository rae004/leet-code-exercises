/**
 * Leet Code Palindrome Number: https://leetcode.com/problems/palindrome-number/description/
 *
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 */
import reverseArrayOfDigits from '../lib/createReversedArrayFromNumber.ts';
import createIntFromArray from '../lib/createNumberFromArrayOfNumbers.ts';

const isNumPalindrome = (num: number): boolean => {
  const reversedArrayOfDigits = reverseArrayOfDigits(num);
  const reversedInt = createIntFromArray(reversedArrayOfDigits);
  const isPalindrome = reversedInt === num;

  return Math.sign(num) > 0 ? isPalindrome : false;
};

export default isNumPalindrome;
