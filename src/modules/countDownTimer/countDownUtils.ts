
export function formatNumToStr(num: number) {
  // if: 1 digit =: put a leading zero
  let str = num.toString();

  if (str.length === 1) str = '0' + str;

  return str;
}