/**
 * https://leetcode.com/problems/remove-element/
 * 
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums || !nums.length) {
    return 0;
  }

  /* Option #1
  for (let i=0; i < nums.length; i++) {
    if (nums[i] === val) {
        nums.splice(i,1);
        i--;
    }
  }
  */

  // Option #2
  let result = nums.length;
  for (let i = nums.length; i > 0; i--) {
    if (nums[i-1] === val) {
      result--;
      continue;
    }

    for (let j = 0; j < i-1; j++) {
      if (nums[j] === val) {
        nums[j] = nums[i-1];
        result--;
        break;
      }
    }
  }

  return result;
};

let re1A = [3, 2, 2, 3];
const re1R = removeElement(re1A, 3);
document.querySelector("#re1").innerHTML = re1R + " | " + re1A.slice(0, re1R);

let re2A = [0, 1, 2, 2, 3, 0, 4, 2];
const re2R = removeElement(re2A, 2);
document.querySelector("#re2").innerHTML = re2R + " | " + re2A.slice(0, re2R);

let re3A = [1];
const re3R = removeElement(re3A, 1);
document.querySelector("#re3").innerHTML = re3R + " | " + re2A.slice(0, re3R);
