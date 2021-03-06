/*
https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums || !nums.length || nums.length < 3) {
        return [];
    }

    nums = nums.sort((a,b)=> a-b);

    if (nums[0] === 0 && nums[nums.length - 1] === 0) {
        return [[0, 0, 0]];
    }

    if (nums[0] > -1 || nums[nums.length - 1] < 1) {
        return [];
    }

    const solutions = new Map();
    let sum;
    let i=0;

    for (; i < nums.length && nums[i] < 0; i++) {
        if (nums[i] === nums[i-1]) {
            continue;
        }

        const n1 = nums[i];
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let n2 = nums[j];
            let n3 = nums[k];
            sum = n1 + n2 + n3;
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                let solution = [n1, n2, n3].sort((a,b)=> a-b);
                solutions.set(`${solution[0]}${solution[1]}${solution[2]}`, solution);
                j++; k--;
            }
        }
    }

    if (nums[i] === 0 && nums[i+1] === 0 && nums[i+2]===0){
        solutions.set('000', [0,0,0]);
    }

    return Array.from(solutions.values());
};

function draw(arr) {
    return arr.map(a=> `[${a}]`)
}

// document.querySelector('#sum3_1').innerHTML = draw(threeSum([-1, 0, 1, 2, -1, -4]));
// document.querySelector('#sum3_2').innerHTML = draw(threeSum([0, 0, 0]));
/*
Expected:
[[-15,1,14],[-15,2,13],[-15,3,12],[-15,4,11],[-15,5,10],[-15,6,9],[-15,7,8],[-14,0,14],[-14,1,13],[-14,2,12],[-14,3,11],[-14,4,10],[-14,5,9],[-14,6,8],[-14,7,7],[-13,-1,14],[-13,0,13],[-13,1,12],[-13,2,11],[-13,3,10],[-13,4,9],[-13,5,8],[-13,6,7],[-12,-2,14],[-12,-1,13],[-12,0,12],[-12,1,11],[-12,2,10],[-12,3,9],[-12,4,8],[-12,5,7],[-11,-3,14],[-11,-2,13],[-11,-1,12],[-11,0,11],[-11,1,10],[-11,2,9],[-11,3,8],[-11,4,7],[-11,5,6],[-10,-4,14],[-10,-3,13],[-10,-2,12],[-10,-1,11],[-10,0,10],[-10,1,9],[-10,2,8],[-10,3,7],[-10,4,6],[-10,5,5],[-9,-5,14],[-9,-4,13],[-9,-3,12],[-9,-2,11],[-9,-1,10],[-9,0,9],[-9,1,8],[-9,2,7],[-9,3,6],[-9,4,5],[-8,-6,14],[-8,-5,13],[-8,-4,12],[-8,-3,11],[-8,-2,10],[-8,-1,9],[-8,0,8],[-8,1,7],[-8,2,6],[-8,3,5],[-8,4,4],[-7,-7,14],[-7,-6,13],[-7,-5,12],[-7,-4,11],[-7,-3,10],[-7,-2,9],[-7,-1,8],[-7,0,7],[-7,1,6],[-7,2,5],[-7,3,4],[-6,-6,12],[-6,-5,11],[-6,-4,10],[-6,-3,9],[-6,-2,8],[-6,-1,7],[-6,0,6],[-6,1,5],[-6,2,4],[-6,3,3],[-5,-5,10],[-5,-4,9],[-5,-3,8],[-5,-2,7...
*/
// document.querySelector('#sum3_3').innerHTML = draw(threeSum([-13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1]));
// expected: [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]
// document.querySelector('#sum3_4').innerHTML = draw(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]));
//Expected: [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
document.querySelector('#sum3_5').innerHTML = draw(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));