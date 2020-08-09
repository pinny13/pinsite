/*
https://leetcode.com/problems/string-to-integer-atoi/

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (!str) {
    //   Empty string
    return 0;
  }

  if (!str.replace(" ", "")) {
    //   Whitespace only
    return 0;
  }

  const numericValuesFull = "+-0987654321";
  const numericValues = "0987654321";
  const trimmedStr = str.trim();

  if (numericValuesFull.indexOf(trimmedStr[0]) < 0) {
    //   First non-whitespace group of characters does not start with numeric character
    return 0;
  }

  const tempStr = trimmedStr.split(" ")[0];
  let newStr = "";
  let i = 0;
  while (
    i < tempStr.length &&
    ((i === 0 && numericValuesFull.indexOf(tempStr[i]) > -1) ||
      (i > 0 && numericValues.indexOf(tempStr[i]) > -1))
  ) {
    newStr = newStr + tempStr[i];
    i++;
  }

  const result = +newStr;
  if (isNaN(result)) {
    return 0;
  }

  const MIN = Math.pow(-2, 31);
  const MAX = Math.pow(2, 31) - 1;

  if (result < MIN) {
    return MIN;
  }
  if (result > MAX) {
    return MAX;
  }
  return result;
};
/*
document.querySelector("#atoi1").innerHTML = myAtoi("42");
document.querySelector("#atoi2").innerHTML = myAtoi("   -42");
document.querySelector("#atoi3").innerHTML = myAtoi("4193 with words");
document.querySelector("#atoi4").innerHTML = myAtoi("words and 987");
document.querySelector("#atoi5").innerHTML = myAtoi("-91283472332");
document.querySelector("#atoi6").innerHTML = myAtoi("+");
document.querySelector("#atoi7").innerHTML = myAtoi("+-2");
document.querySelector("#atoi8").innerHTML = myAtoi("  -0012a42");*/
document.querySelector("#atoi9").innerHTML = myAtoi("-5-");
