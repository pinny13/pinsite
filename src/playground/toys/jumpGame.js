/*
https://leetcode.com/problems/jump-game/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let pos = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= pos) {
      pos = i;
    }
  }
  return pos === 0;
};

document.querySelector("#jg_1").innerHTML = canJump([2, 3, 1, 1, 4]);
document.querySelector("#jg_2").innerHTML = canJump([3, 2, 1, 0, 4]);
document.querySelector("#jg_3").innerHTML = canJump([2, 0]);
document.querySelector("#jg_4").innerHTML = canJump([2, 5, 0, 0]);
document.querySelector("#jg_5").innerHTML = canJump([2, 0, 0]);
