/*
https://leetcode.com/problems/spiral-matrix/

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }

  let result = [];

  let startRowPos = 0;
  let endRowPos = matrix[0].length - 1;
  let startColPos = 0;
  let endColPos = matrix.length - 1;
  let counter = (endRowPos + 1) * (endColPos + 1);

  let row = null;
  let i = 0;
  while (counter > 0) {
    // Iterate over top row
    row = matrix[startColPos];
    for (i = startRowPos; i < endRowPos + 1; i++) {
      result.push(row[i]);
      counter--;
    }
    startColPos++;

    if (!counter) {
      break;
    }

    // Iterate over rightmost columns
    for (i = startColPos; i < endColPos + 1; i++) {
      result.push(matrix[i][endRowPos]);
      counter--;
    }
    endRowPos--;

    if (!counter) {
      break;
    }

    // Iterate over bottom row
    row = matrix[endColPos];
    for (i = endRowPos; i > startRowPos - 1; i--) {
      result.push(row[i]);
      counter--;
    }
    endColPos--;

    if (!counter) {
      break;
    }

    // Iterate over leftmost column
    for (i = endColPos; i > startColPos - 1; i--) {
      result.push(matrix[i][startRowPos]);
      counter--;
    }
    startRowPos++;
  }

  return result;
};

document.querySelector("#sm_1").innerHTML = spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
document.querySelector("#sm_2").innerHTML = spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]);
