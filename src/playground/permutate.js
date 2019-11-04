/**
 * https://leetcode.com/problems/permutations/
 * 
 Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
] 
 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  const getPermutations = (curPerm, subArray) => {
    if (!subArray || !subArray.length) {
      result.push(curPerm);
      return;
    }

    for (let i = 0; i < subArray.length; i++) {
      let newCurPerm = Array.of(...curPerm);
      newCurPerm.push(subArray[i]);
      let newSubArray = Array.of(...subArray);
      newSubArray.splice(i, 1);
      getPermutations(newCurPerm, newSubArray);
    }
  };

  getPermutations([], nums);
  return result;
};

function arrayToStr(arr) {
  let result = "";

  for (a of arr) {
    result += ` [${a.join(" , ")}] , `;
  }

  return result.substring(0, result.length - 2);
}

const lop1 = document.querySelector("#lop1");
lop1.innerHTML = arrayToStr(permute([1, 2, 3]));
const lop2 = document.querySelector("#lop2");
lop2.innerHTML = arrayToStr(permute([1, 2, 3, 4]));
