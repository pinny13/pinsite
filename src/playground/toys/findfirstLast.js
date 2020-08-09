/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let first = Infinity;
  let last = -Infinity;

  const updateValues = newPos => {
    first = Math.min(first, newPos);
    last = Math.max(last, newPos);
  };

  const mySearch = (nums, target, offset) => {
    if (!nums || !nums.length) {
      return;
    }

    if (nums.length === 1) {
      if (nums[0] === target) {
        updateValues(offset);
      }
      return;
    }

    const start = nums[0];
    const end = nums[nums.length - 1];

    if (start > target || end < target) {
      return;
    }

    if (start === target) {
      updateValues(offset);
    }

    if (end === target) {
      updateValues(nums.length - 1 + offset);
    }

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);
    mySearch(left, target, offset);
    mySearch(right, target, offset + middle);
  };

  mySearch(nums, target, 0);

  if (first === Infinity) {
    return [-1, -1];
  }

  return [first, last];
};

document.querySelector("#ffl_1").innerHTML = searchRange(
  [5, 7, 7, 8, 8, 10],
  8
);
document.querySelector("#ffl_2").innerHTML = searchRange(
  [5, 7, 7, 8, 8, 10],
  6
);
document.querySelector("#ffl_3").innerHTML = searchRange([2, 2], 2);

document.querySelector("#ffl_4").innerHTML = searchRange([1, 4], 4);
