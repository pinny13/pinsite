/**
 * https://leetcode.com/problems/merge-intervals/
 * 
 * Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 * 
 * 
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals || !intervals.length) {
    return [];
  }

  if (intervals.length === 1) {
    return intervals;
  }

  let doesOverlap = (s1, s2, e1, e2) => {
    let overlaps = (e1 >= s2 && e1 <= e2) || (s1 >= s2 && s1 <= e2);
    let includes = (s1 <= s2 && e1 >= e2) || (s2 <= s1 && e2 >= e1);
    return overlaps || includes;
  };

  intervals = intervals.sort((i1, i2) => i1[0] - i2[0]);

  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const int1 = intervals[i];
    const start1 = int1[0];
    const end1 = int1[1];
    let hasNoOverlaps = true;
    for (let j = 0; j < result.length; j++) {
      const start2 = result[j][0];
      const end2 = result[j][1];

      if (doesOverlap(start1, start2, end1, end2)) {
        // Replace with the merge
        result[j] = [Math.min(start1, start2), Math.max(end1, end2)];
        hasNoOverlaps = false;
        break;
      }
    }

    if (hasNoOverlaps) {
      // Does not overlap
      result.push(int1);
      hasNoOverlaps = false;
    }
  }

  return result;
};

document.querySelector("#mi_1").innerHTML = printoutIntervals(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
);
document.querySelector("#mi_2").innerHTML = printoutIntervals(
  merge([
    [1, 4],
    [4, 5]
  ])
);

document.querySelector("#mi_3").innerHTML = printoutIntervals(
  merge([
    [1, 4],
    [0, 5]
  ])
);

document.querySelector("#mi_4").innerHTML = printoutIntervals(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
  ])
);

function printoutIntervals(ints) {
  let result = "";
  for (int of ints) {
    result += ` [${int[0]},${int[1]}] `;
  }
  return `[${result}]`;
}
