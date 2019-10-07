/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") {
        return [];
    }
    
    const results = [];
    recursive(digits, "", results);
    return results;
};


var recursive = function(digits, letters, result) {
    if (digits === "") {
        result.push(letters)
        return;
    } 
    
    const digit = digits[0];
    const letter1 = getLetter(digit + 1);
    const letter2 = getLetter(digit + 2);
    const letter3 = getLetter(digit + 3);
    const newDigits = digits.substring(1);
    
    recursive(newDigits, letters+letter1, result);
    recursive(newDigits, letters+letter2, result);
    recursive(newDigits, letters+letter3, result);
    
    if (digit === '7' || digit === '9'){
        const letter4 = getLetter(digit + 4);
        recursive(newDigits, letters+letter4, result);
    }
}

var getLetter = function(digitVersion) {
    return ({
        "21": "a",
        "22": "b",
        "23": "c",
        "31": "d",
        "32": "e",
        "33": "f",
        "41": "g",
        "42": "h",
        "43": "i",
        "51": "j",
        "52": "k",
        "53": "l",
        "61": "m",
        "62": "n",
        "63": "o",
        "71": "p",
        "72": "q",
        "73": "r",
        "74": "s",
        "81": "t",
        "82": "u",
        "83": "v",
        "91": "w",
        "92": "x",
        "93": "y",
        "94": "z",
    })[digitVersion];
}