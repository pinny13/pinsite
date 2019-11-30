/*
https://leetcode.com/problems/median-of-two-sorted-arrays/

here are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const getMedian = arr => {
    if (arr.length % 2 !== 0) {
      return arr[Math.floor(arr.length / 2)];
    } else {
      const mid = arr.length / 2;
      const a = arr[mid - 1];
      const b = arr[mid];
      return (a + b) / 2;
    }
  };

  const merge1 = () => {
    return nums1.concat(nums2).sort((a, b) => a - b);
  };

  let newArr = [];

  if (!nums1 || !nums1.length) {
    newArr = nums2;
  } else if (!nums2 || !nums2.length) {
    newArr = nums1;
  } else {
    if (nums1.length === 1 && nums2.length === 1) {
      const a = Math.min(nums1[0], nums2[0]);
      const b = Math.max(nums1[0], nums2[0]);
      return (a + b) / 2;
    } else {
      newArr = merge1();
    }
  }

  return getMedian(newArr);
};

/*
document
  .querySelector("#m2a_1")
  .appendChild(document.createTextNode(findMedianSortedArrays([1, 3], [2])));
document
  .querySelector("#m2a_2")
  .appendChild(document.createTextNode(findMedianSortedArrays([1, 2], [3, 4])));
*/
document
  .querySelector("#m2a_3")
  .appendChild(document.createTextNode(findMedianSortedArrays([3], [-2, -1])));
