/*
https://leetcode.com/problems/powx-n/

Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (
    isNaN(x) ||
    isNaN(n) ||
    x < -100 ||
    x > 100 ||
    n < Math.pow(-2, 31) ||
    n > Math.pow(2, 31) - 1
  ) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n === -1) {
    return 1 / x;
  }

  if (x === 1) {
    return 1;
  }

  if (x === -1) {
    if (n % 2 === 0) {
      return 1;
    } else {
      return -1;
    }
  }

  const N = Math.abs(n);
  let result = 1;
  for (let i = 0; i < N; i++) {
    result *= x;
  }

  if (n < 0) {
    return 1 / result;
  }

  return result;
};

document.querySelector("#pow_1").innerHTML = myPow(2, 10);
document.querySelector("#pow_2").innerHTML = myPow(2.1, 3);
document.querySelector("#pow_3").innerHTML = myPow(2, -2);
document.querySelector("#pow_4").innerHTML = myPow(0.44528, 0);
document.querySelector("#pow_5").innerHTML = myPow(1.00012, 1024);
document.querySelector("#pow_6").innerHTML = myPow(-1,2147483647);
