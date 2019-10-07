/*
https://leetcode.com/problems/rotate-image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (!matrix){
        return
    }
    
    const len = matrix[0].length;
    if (len < 2) {
        return;
    }

    iRrotate(matrix, 0 , len);
};


var iRrotate = function(matrix, start, len) {
    if (len < 2) {
        return;
    } else if (len === 2){
        let n1 = matrix[start][start];
        let n2 = matrix[start][start+1];
        let n3 = matrix[start+1][start+1];
        let n4 = matrix[start+1][start];
        
         //4
        matrix[start+1][start] = n3;
        //3
        matrix[start+1][start+1] = n2;
        //2
        matrix[start][start+1] = n1;
        //1
        matrix[start][start] = n4;
    } else {
        for(let i=start; i < len-1; i++){
            let n1 = matrix[start][i];
            let n2 = matrix[i][len-1-start];
            let n3 = matrix[len-1-start][len-1-i];
            let n4 = matrix[len-1-i][start];
        
            //4
            matrix[len-1-i][start] = n3;
            //3
            matrix[len-1-start][len-1-i] = n2;
            //2
            matrix[i][len-1-start] = n1;
            //1
            matrix[start][i] = n4;
        }
        iRrotate(matrix, start+1, len-2);   
    }
};