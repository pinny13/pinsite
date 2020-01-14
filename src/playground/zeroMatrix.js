/*
https://leetcode.com/problems/set-matrix-zeroes/

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rowMapSet = new Set();
  const colMapSet = new Set();

  // Create maps
  for (let r = 0; r < matrix.length; r++) {
    const row = matrix[r];
    for (let c = 0; c < row.length; c++) {
      if (row[c] === 0) {
        rowMapSet.add(r);
        colMapSet.add(c);
      }
    }
  }

  if (rowMapSet.size === 0 && colMapSet.size === 0) {
    return;
  }

  // Update matrix
  for (let r = 0; r < matrix.length; r++) {
    const row = matrix[r];

    if (rowMapSet.has(r)) {
      row.fill(0);
      continue;
    }

    for (let c = 0; c < row.length; c++) {
      if (colMapSet.has(c)) {
        row[c] = 0;
      }
    }
  }
};

let m1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
setZeroes(m1);
document.querySelector("#mz_1").innerHTML = getMatrixHtml(m1);

let m2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];
setZeroes(m2);
document.querySelector("#mz_2").innerHTML = getMatrixHtml(m2);

function getMatrixHtml(m) {
  let result = '';

  for (let r = 0; r < m.length; r++) {
    result += '<div>[';
    const row = m[r];
    // for (let c = 0; c < row.length; c++) {
      result += row.join(',');
    // }
    result += ']</div>';
  }


  return result;
}