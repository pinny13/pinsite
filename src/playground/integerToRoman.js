/**
 * https://leetcode.com/problems/integer-to-roman/
 
 Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

 /**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let h = num % 1000;
    let cleanK = (num - h) / 1000;
    let t = h % 100;
    let cleanH = (h - t) / 100;
    let s = t % 10;
    let cleanT = (t - s) / 10;
        
    let romanK = cleanK < 0 ? '' : 'M'.repeat(cleanK);
    let romanH = cleanH < 0 ? '' : getRomanNumber(cleanH,'C','D','M');
    let romanT = cleanT < 0 ? '' : getRomanNumber(cleanT,'X','L','C');
    let romanS = s < 0 ? '' : getRomanNumber(s,'I','V','X');
    
    return `${romanK}${romanH}${romanT}${romanS}`;
};

var getRomanNumber = function(v, symbol, symbol5, symbolN) {
    let result = dealWithSpecialCase(v, symbol, symbol5, symbolN);
    if (!result) {
        let divV = v/5;
        if (divV === 1) {
            return symbol5;
        }
        let remV = v%5;
        if (divV < 1){
            return symbol.repeat(remV);
        } else {
            return symbol5 + symbol.repeat(remV);
        }
    }
    return result;
}

var dealWithSpecialCase = function(num, symbol, symbol4, symbol9) {
    if (num === 4){
        return `${symbol}${symbol4}`
    }
    
    if (num === 9) {
        return `${symbol}${symbol9}`
    }
    
    return '';   
}