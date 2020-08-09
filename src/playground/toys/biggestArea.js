/**
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

 */

 /**
 * @param {number[]} height
 * @return {number}
 */


var maxArea = function(height) {
    let maxArea = 0
    for (let b=0, e=height.length-1; b < e;) {
        let bH = height[b];
        let eH = height[e];
        
        let newArea = Math.min(bH, eH) * (e-b);
        if (newArea > maxArea) {
            maxArea = newArea
        }
        
        if (bH <= eH){
            b++;
        } else {
            e--;
        }        
    }
    
    return maxArea;
};