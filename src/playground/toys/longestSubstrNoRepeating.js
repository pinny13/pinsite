/**
 *  https://leetcode.com/problems/longest-substring-without-repeating-characters/
 
 Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      let str = s.substring(i, j);

      if (str.length < result) {
        continue;
      }

      let checkSet = new Set(str);
      if (str.length === checkSet.size && str.length > result) {
        result = str.length;
      }
    }
  }
  return result;
};

var lengthOfLongestSubstring2 = function(s) {
  var max = 0,
    j = 0,
    resStr = "";
  while (j < s.length) {
    if (resStr.indexOf(s[j]) > -1) {
      resStr = resStr.substring(1, resStr.length);
    } else {
      resStr += s[j];
      j++;
      max = max > resStr.length ? max : resStr.length;
    }
  }

  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring3 = function(s) {
  if (!s) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  if (s.length === 2) {
    return s[0] === s[1] ? 1 : 2;
  }

  let result = 0;
  let map = new Map();

  // Create index map
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let charArray = map.get(char);
    if (!charArray) {
      charArray = [];
    }
    charArray.push(i);
    map.set(char, charArray);
  }

  // Check for no repeats
  const vals = Array.from(map.values());
  if (vals.length === 1) {
    return 1;
  }

  let oneTimeCharDiff = 0;
  vals.forEach(charArr => {
    if (charArr.length === 1) {
      oneTimeCharDiff += 1;
      return;
    }

    if (oneTimeCharDiff > 0) {
      result = Math.max(result, oneTimeCharDiff + 1);
    }
    let first = -1;
    let second = -1;
    for (let j = 1; j < charArr.length; j++) {
      first = charArr[j - 1];
      second = charArr[j];
      let diff = second - first;
      if (first === 0 && second === s.length-1){
          diff -= 1;
      }
      else if (j === 1 && second === s.length - 1) {
        diff += oneTimeCharDiff;
      }
      result = Math.max(result, diff);
    }
    oneTimeCharDiff = 1;
  });

  result = Math.max(result, oneTimeCharDiff);

  return result;
};

function showIt(id, str) {
  document.querySelector(`#lswr_${id}`).innerHTML = lengthOfLongestSubstring3(
    str
  );
}
/*
showIt(1, "abcabcbb");
showIt(2, "bbbbb");
showIt(3, "pwwkew");
showIt(4, "au");
showIt(5, "qwerty");
showIt(6, "aab");
showIt(7, "abcdbefg");
showIt(8, "abcdb");
showIt(9, "abb");
showIt(10, "abba");*/
showIt(11, "asljlj");