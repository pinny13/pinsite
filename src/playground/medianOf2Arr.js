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
var findMedianSortedArrays = function (nums1, nums2) {

    let newArr = [];
    if (!nums1 || !nums1.length) {
        newArr = nums2;
    } else if (!nums2 || !nums2.length) {
        newArr = nums1;
    } else {
        newArr = nums1.concat(nums2).sort();
    }

    // or 
    let n1 = Array.from(nums1);
    let n2 = Array.from(nums2);
    


    if (newArr.length % 2 !== 0) {
        return newArr[Math.floor(newArr.length / 2)];
    } else {
        const mid = newArr.length / 2;
        const a = newArr[mid - 1];
        const b = newArr[mid];
        return (a + b) / 2;
    }
};

document.querySelector('#m2a_1').appendChild(document.createTextNode(findMedianSortedArrays([1, 3], [2])));
document.querySelector('#m2a_2').appendChild(document.createTextNode(findMedianSortedArrays([1, 2], [3, 4])));