/*
https://leetcode.com/problems/plus-one/

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let extra = 0;
  let i = digits.length - 1;
  let add = 1;

  for (; i > -1; i--) {
    let sum = digits[i] + add + extra;
    if (sum < 10) {
      extra = 0;
      digits[i] = sum;
      break;
    } else {
      digits[i] = sum - 10;
      extra = 1;
    }
    add = 0;
  }

  if (i === -1 && extra === 1) {
    digits.unshift(1);
  }

  return digits;
};

document.querySelector("#po_1").innerHTML = plusOne([1, 2, 3]);
document.querySelector("#po_2").innerHTML = plusOne([4, 3, 2, 1]);
document.querySelector("#po_3").innerHTML = plusOne([3, 2, 9]);
document.querySelector("#po_4").innerHTML = plusOne([9, 9, 9]);
document.querySelector("#po_5").innerHTML = plusOne([8, 9, 9, 9]);