/**
 * https://leetcode.com/problems/count-and-say/submissions/
 * 
 * 
 * he count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
 */

 /**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return iCountAndSay(n-1, '1')
};

var iCountAndSay = function(num, say) {
    if (num === 0) {
        return say;
    }
    
    let currentSay = '';
    let currentNum = say[0];
    let count = 1;
    for (let i=1; i<say.length; i++) {
        if (currentNum !== say[i]) {
            currentSay= currentSay + convertToSay(currentNum, count);
            currentNum = say[i];
            count = 1;
        } else {
            count++;
        }
    }
    currentSay = currentSay + convertToSay(currentNum, count);
    
    return iCountAndSay(num-1, currentSay)
}

var convertToSay = function(num, count) {
    return count + '' + num;
}