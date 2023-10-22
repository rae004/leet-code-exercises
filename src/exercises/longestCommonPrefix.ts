import findCommonCharInStrings from '../lib/findCommonCharInStrings.ts';

const longestCommonPrefix = (strings: string[]): string => {
  if (strings.length === 0) {
    return '';
  }

  let common = new Set(strings[0]);
  for (let i = 0; i < strings.length; ++i) {
    common = findCommonCharInStrings({
      commonStrA: common,
      commonStrB: strings[i],
    });
  }

  return Array.from(common).join('');
};

export default longestCommonPrefix;
