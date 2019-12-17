/*
https://leetcode.com/problems/jump-game-ii/

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  if (nums.length === 1) {
    return 0;
  }

  let result = nums.length;

  function calcJumps(ns, pos, count) {
    for (let i = pos; i <= ns.length - 1; i++) {
      if (i + ns[i] >= ns.length - 1) {
        result = Math.min(result, count);
        return;
      }

      if (count >= result){
          return;
      }

      for (let j = 1; j <= ns[i]; j++) {
        calcJumps(ns, pos + j, count + 1);
      }

      count++;
    }
  }

  calcJumps(nums, 0, 1);

  return result;
};

document.querySelector("#jg2_1").innerHTML = jump2([2, 3, 1, 1, 4]);
document.querySelector("#jg2_2").innerHTML = jump2([0]);
document.querySelector("#jg2_3").innerHTML = jump2([2, 1]);
document.querySelector("#jg2_4").innerHTML = jump2([9,8,2,2,0,2,2,0,4,1,5,7,9,6,6,0,6,5,0,5]);
