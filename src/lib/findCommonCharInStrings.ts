type StringSet = Set<string> | string;

interface FindCommonProps {
  commonStrA: StringSet;
  commonStrB: StringSet;
}

const findCommonCharInStrings = ({
  commonStrA,
  commonStrB,
}: FindCommonProps) => {
  const common = new Set('');
  const uniqueB = new Set(commonStrB);

  for (const value of commonStrA) {
    if (uniqueB.has(value)) {
      if (uniqueB.has(value)) {
        common.add(value);
      }
    }
  }

  return common;
};

export default findCommonCharInStrings;
