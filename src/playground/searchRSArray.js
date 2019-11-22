/*
https://leetcode.com/problems/search-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums || !nums.length) {
        return 0;
    }

    if (nums.length === 1) {
        if (nums[0] === target) {
            return 0;
        }
        return -1;
    }
};

document.querySelector('#sirsa_1').innerHTML = search([4, 5, 6, 7, 0, 1, 2], 0);
document.querySelector('#sirsa_2').innerHTML = search([4, 5, 6, 7, 0, 1, 2], 3);
document.querySelector('#sirsa_3').innerHTML = search([4, 5, 6, 7, 0, 1, 2], 4);