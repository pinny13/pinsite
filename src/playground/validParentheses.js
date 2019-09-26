/**
 * https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) {
        return true;
    }
    
    if (s.length % 2 !== 0) {
        return false;
    }
    
    let queue = new Array();
    for (let i = 0; i < s.length; i++){
        const c = s[i];
        if (c === '(' || c === '{' || c === '[') {
            queue.push(c);
            continue;
        }
        
        if (!queue.length) {
            return false;
        }
        
        let lastC = queue.pop();
        if (c === ")" && lastC !== "(") {
            return false;    
        } else if (c === "}" && lastC !== "{") {
            return false;
        } else if (c === "]" && lastC !== "[") {
            return false;
        }
    }
    return !queue.length;
};