/**
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */


/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
    if (!nums || !nums.length) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let result = -Infinity;
    let tempResult = result;

    for (let i = 0; i < nums.length; i++) {
        tempResult = Math.max(nums[i], tempResult + nums[i]);
        result = Math.max(result, tempResult);
    }

    return result;
};

document.querySelector('#msa1').innerHTML = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
document.querySelector('#msa2').innerHTML = maxSubArray([-2, 1, -3, 6, -1, 1])
document.querySelector('#msa3').innerHTML = maxSubArray([-5])
document.querySelector('#msa4').innerHTML = maxSubArray([1, -1])