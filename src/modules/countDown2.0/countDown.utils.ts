
// format digits to add  0 to 2 =: 02
export function formatNumToStr(num: number) {
  // if: 1 digit =: put a leading zero
  let str = num.toString();

  if (str.length === 1) str = '0' + str;

  return str;
}

// converts seconds to H:M:S
export function secondsToHms(seconds: number) {
  const SEC_IN_HOUR = 3600;
  const SEC_IN_MIN = 60;

  const hours = Math.floor(seconds / SEC_IN_HOUR);

  // remaining seconds
  seconds = seconds % SEC_IN_HOUR;

  const minutes = Math.floor(seconds / SEC_IN_MIN);

  // remainder
  seconds = seconds % SEC_IN_MIN;

  return {
    hours,
    minutes,
    seconds,
  }
}