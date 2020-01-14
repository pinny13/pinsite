/*
https://leetcode.com/problems/sort-colors/

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // Get counts
  let c0 = 0;
  let c1 = 0;
  let c2 = 0;

  for (let n of nums) {
    if (n === 0) {
      c0++;
    } else if (n === 1) {
      c1++;
    } else {
      c2++;
    }
  }

  let i = 0;
  while (c0) {
    nums[i] = 0;
    c0--;
    i++;
  }

  while (c1) {
    nums[i] = 1;
    c1--;
    i++;
  }

  while (c2) {
    nums[i] = 2;
    c2--;
    i++;
  }
};
let n1 = [2, 0, 2, 1, 1, 0];
sortColors(n1);
document.querySelector("#sc_1").innerHTML = n1;
let n2 = [1, 0, 1, 2, 1, 0, 2];
sortColors(n2);
document.querySelector("#sc_2").innerHTML = n2;
