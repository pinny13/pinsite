/*
https://leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height || height.length < 2) {
    return 0;
  }

  let result = 0;
  let first = height[0];
  let second = height[2];
  let pointsOfReference = [];
  let currentWater = 0;
  let i=1;

  for (; i < height.length; i++) {
    second = height[i];

    if (first > second) {
      //Going down
      pointsOfReference.push(first);
      currentWater += pointsOfReference[0] - second;
    } else if (first === second) {
      // Staying on the same level
      currentWater += pointsOfReference.length
        ? pointsOfReference[0] - second
        : 0;
    } else {
      //Going up
      if (pointsOfReference.length) {
        // If there was at least one bump
        if (second >= pointsOfReference[0]) {
          //Done with current body of water
          result += currentWater;
          currentWater = 0;
          pointsOfReference = [];
        } else {
          currentWater += pointsOfReference[0] - second;

          // calculate water between current and previous point of same or higher
          let tempWater = second - first;
          let counter = 1;
          let j = pointsOfReference.length - 1;
          while (pointsOfReference[j] <= second) {
            counter++;
            tempWater += second - height[i - counter];
            j--;
            pointsOfReference.pop();
          }

          currentWater -= tempWater;
          result += tempWater;

          // Remove closest points of reference that are equal or lesser height
          j = pointsOfReference.length - 1;
          while (pointsOfReference[j] <= second) {
            pointsOfReference.pop();
            j--;
          }
        }
      }
    }

    first = second;
  }

  if (pointsOfReference.length && second > height[i-2]){
      result += (second - height[i-2]);
  }

  return result;
};

/*
document.querySelector("#trw_1").innerHTML = trap([
  0,
  1,
  0,
  2,
  1,
  0,
  1,
  3,
  2,
  1,
  2,
  1
]);

document.querySelector("#trw_2").innerHTML = trap([0, 7, 1, 4, 6]);*/
document.querySelector("#trw_3").innerHTML = trap([4,2,3]);