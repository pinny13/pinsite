/*
https://leetcode.com/problems/divide-two-integers/

Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0) {
        return 0;
    }

    if (dividend === divisor) {
        return 1;
    }

    let MIN = Math.pow(-2, 31);
    let MAX = Math.pow(2, 31) - 1;

    if (divisor === 1) {
        if (dividend > MAX || dividend < MIN) {
            return MAX;
        }
    }
    if (divisor === -1) {
        if (dividend > 0 && dividend > Math.abs(MIN)) {
            return MAX;
        } else if (dividend < 0 && Math.abs(dividend) > MAX) {
            return MAX;
        }
    }

    let result = 0;
    let sign = 1;
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        sign = -1;
    }

    let d = Math.abs(dividend);
    let r = Math.abs(divisor);

    while (d >= r) {
        result += 1;
        d = d - r;
    }

    if (sign === -1) {
        return 0 - result;
    }

    return result;
};

document.querySelector('#d2i_1').innerHTML = divide(10, 3);
document.querySelector('#d2i_2').innerHTML = divide(7, -3);
document.querySelector('#d2i_3').innerHTML = divide(15, 5);
document.querySelector('#d2i_4').innerHTML = divide(0, 1);
document.querySelector('#d2i_5').innerHTML = divide(2, 2);
document.querySelector('#d2i_6').innerHTML = divide(-2147483648, -1);