/*
https://leetcode.com/problems/implement-strstr/

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  if (!haystack) {
    return -1;
  }

  if (!needle) {
    return -1;
  }

  if (needle.length > haystack.length) {
    return -1;
  }

  let result = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) {
      continue;
    }

    if (haystack.length - i < needle.length) {
      return -1;
    }

    if (haystack.substring(i, i + needle.length) === needle){
        return i;
    }
  }

  return result;
};

document.querySelector("#strStr1").innerHTML = strStr("hello", "ll");
document.querySelector("#strStr2").innerHTML = strStr("aaaaa", "bba");
