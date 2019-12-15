/*
https://leetcode.com/problems/climbing-stairs/

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }

  let cals = new Map();

  let cS = step => {
    if (step === n + 1) {
      return;
    }

    let preCalc = cals.get(step);
    if (preCalc) {
      return preCalc;
    }

    if (step <= 2) {
      cals.set(step, step);
    } else {
      let step1 = cS(step - 1);
      let step2 = cS(step - 2);
      let stepVal = step1 + step2;
      cals.set(step, stepVal);
    }
    return cS(step + 1);
  };

  cS(0);
  return cals.get(n);
};

document.querySelector("#cs_1").innerHTML = climbStairs(2);
document.querySelector("#cs_2").innerHTML = climbStairs(3);
document.querySelector("#cs_3").innerHTML = climbStairs(4);
document.querySelector("#cs_4").innerHTML = climbStairs(45);
