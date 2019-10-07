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
    if (!s){
        return 0;
    }
    
    if (s.length === 1){
        return 1;
    }

    let result = 0;
    for(let i=0; i < s.length; i++){
        for(let j=1; j <= s.length; j++) {
            let str = s.substring(i,j);
            
            if (str.length < result){
                continue;
            }
            
            let checkSet = new Set(str);
            if (str.length === checkSet.size && str.length > result){
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
    while(j < s.length) {
        if(resStr.indexOf(s[j]) > -1) {
            resStr = resStr.substring(1, resStr.length);
        }
        else {
            resStr += s[j];
            j++;
            max = max > resStr.length ? max : resStr.length;
        }
    }
    
    return max;
};

const lswr1 = document.getElementById("lswr1");
lswr1.innerHTML = lengthOfLongestSubstring("abcabcbb");

const lswr2 = document.getElementById("lswr2");
lswr2.innerHTML = lengthOfLongestSubstring("au");

const lswr3 = document.getElementById("lswr3");
lswr3.innerHTML = lengthOfLongestSubstring(
    "qwertyu"
);