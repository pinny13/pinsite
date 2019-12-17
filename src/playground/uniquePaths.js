/*
https://leetcode.com/problems/unique-paths/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let pathsCount = 0;

    function calcPath(x, y) {
        if (x === m - 1 && y === n - 1) {
            pathsCount++;
            return;
        }

        if (x < m - 1) {
            calcPath(x + 1, y);
        }

        if (y < n - 1) {
            calcPath(x, y + 1);
        }
    }
    calcPath(0, 0);

    return pathsCount;
};

var uniquePaths2 = function (m, n) {
    if (m === n && n < 3) {
        return n;
    }

    let pathsCount = 0;
    let cache = new Map();

    function calcPath(x, y) {
        if (x === m - 1 && y === n - 1) {
            pathsCount++;
            return;
        }

        const cacheKey = `${x}_${y}`;
        const cachedValue = cache.get(cacheKey);
        if (cachedValue) {
            pathsCount += cachedValue;
            return;
        } else {
            cache.set(cacheKey, pathsCount);
        }

        if (x < m - 1) {
            calcPath(x + 1, y);
        }

        if (y < n - 1) {
            calcPath(x, y + 1);
        }
    }
    calcPath(0, 0);

    return pathsCount;
};

document.querySelector('#up_1').innerHTML = uniquePaths2(3, 2);
document.querySelector('#up_2').innerHTML = uniquePaths2(7, 3);
// document.querySelector('#up_3').innerHTML = uniquePaths2(51, 9);