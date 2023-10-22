import isNumPalindrome from './exercises/palindromeNumber.ts';
import romanToInt from './exercises/romanToInteger.ts';
import longestCommonPrefix from './exercises/longestCommonPrefix.ts';
import isValidParentheses from './exercises/validParentheses.ts';

const palindromeCandidates = [
  { number: 121 },
  { number: -121 },
  { number: 12123 },
  { number: 212212212 },
  { number: -212212212 },
];
palindromeCandidates.forEach(({ number }) =>
  // eslint-disable-next-line no-undef
  console.log(`Is ${number} a palindrome?`, isNumPalindrome(number)),
);

const romainNumerals = [
  { numeral: 'MMCM' },
  { numeral: 'MMCMXXXIV' },
  { numeral: 'MCMXCIV' },
  { numeral: 'LVIII' },
];

romainNumerals.forEach(({ numeral }) =>
  // eslint-disable-next-line no-undef
  console.log(`our Roman numeral ${numeral} as integer: `, romanToInt(numeral)),
);

const checkForCommonPrefix = [
  ['flower', 'flow', 'flight'],
  ['dog', 'racecar', 'car'],
  ['caretaker', 'careless', 'cared'],
  ['bearskin', 'bear', 'bearing'],
];
checkForCommonPrefix.forEach((checkPrefix) =>
  // eslint-disable-next-line no-undef
  console.log(
    `Longest prefix shared amongst ${checkPrefix.join(', ')}: `,
    longestCommonPrefix(checkPrefix),
  ),
);

const checkValidParentheses = [
  '(){}[]',
  '()()',
  '[]',
  '[}',
  '[]()[]',
  '[]()[][}()',
];

checkValidParentheses.forEach((check) =>
  // eslint-disable-next-line no-undef
  console.log(
    `Does ${check} have valid parentheses? `,
    isValidParentheses(check),
  ),
);
