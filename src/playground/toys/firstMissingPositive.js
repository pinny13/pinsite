/**
 https://leetcode.com/problems/first-missing-positive/

 Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (!nums || !nums.length){
        return 1;
    }

    let newNums = Array();
    for(let i=0; i < nums.length; i++){
        if (nums[i] > 0){
            newNums.push(parseInt(nums[i]));
        }
    }

    newNums = newNums.sort((a,b) => Number(a) - Number(b));
    if (!newNums.length || (newNums[0]!== 1)){
        return 1;
    }
    
    let missingNum = 1;
    for (let i=0; i < newNums.length; i++){
        let curNum = newNums[i];
        if (curNum > missingNum+1){
            return missingNum+1;
        }
        if (curNum === missingNum+1){
            missingNum++;
        }
    }
    return newNums[newNums.length-1]+1;
};

function getFMPResult(id, arr) {
    const e = document.getElementById('fmp'+id);
    e.innerHTML = firstMissingPositive(arr);
}

getFMPResult(1, [1,2,0]);
getFMPResult(2, []);
getFMPResult(3, [2]);
getFMPResult(4, [-1,-2]);
getFMPResult(5, [3,4,-1,1]);
getFMPResult(6, [1,1]);
getFMPResult(7, [7,8,9,11,12]);
getFMPResult(8, [-1,4,2,1,9,10]);