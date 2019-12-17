/*
https://leetcode.com/problems/minimum-window-substring/

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!s || !t) {
    return "";
  }

  if (t.length > s.length) {
    return "";
  }

  //Init
  let remainingLetters = Array.from(t);
  let start = -1;
  let mapOfPos = new Map();
  let foundChars = [];
  let currChar = "";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    currChar = s[i];

    if (t.includes(currChar)) {
      if (start === -1) {
        start = i;
      }

      if (remainingLetters.includes(currChar)) {
        // This is the first time we see this char
        remainingLetters.splice(remainingLetters.indexOf(currChar), 1);
        foundChars.push(currChar);
      } else {
        // This is NOT the first time we see this char
        foundChars.splice(foundChars.indexOf(currChar), 1);
        foundChars.push(currChar);

        if (start === mapOfPos.get(currChar)) {
          //update start to next closest pos of found char
          // start = Math.max(i, mapOfPos.get(foundChars[0]));
          start = mapOfPos.get(foundChars[0]);
        }
      }

      if (!remainingLetters.length) {
        let tempResult = s.substring(start, i + 1);

        if (!result.length || tempResult.length < result.length) {
          result = tempResult;
        }
      }

      mapOfPos.set(currChar, i);
    }
  }

  return result;
};

// document.querySelector("#mws_1").innerHTML = minWindow("ADOBECODEBANC", "ABC");
// document.querySelector("#mws_2").innerHTML = minWindow("AXBCXXA", "ABC");
document.querySelector("#mws_3").innerHTML = minWindow("bba", "ab");
