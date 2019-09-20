/**
 * https://leetcode.com/problems/integer-to-english-words/
 
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

 /**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) {
        return 'Zero';
    }
    
    const s = num % 10; // 9
    const t = Math.floor(num % 100 / 10); // 8
    const h = Math.floor(num % 1000 / 100); // 7
    const k = Math.floor(num % 1000000 / 1000); // 416
    const m = Math.floor(num % 1000000000 / 1000000); // 123
    const b = Math.floor(num % 1000000000000 / 1000000000); // 9
    
    const sS = s ? (t === 1 ? '' : singles[s]) : '';
    const sT = t ? ((t === 1 ? teens[s] : tens[t]) + ' ') : '';
    const sH = h ? singles[h] + ' Hundred ' : '';
    const sK = k ? intToWords(k) + ' Thousand ' : '';
    const sM = m ? intToWords(m) + ' Million ' : '';
    const sB = b ? singles[b] + ' Billion ' : '';
    
    return `${sB}${sM}${sK}${sH}${sT}${sS}`.trim().replace(new RegExp('  ', 'gi'), ' ');
};

var intToWords = function(priNum) {
    if (priNum < 10) {
        return singles[priNum]
    }
    if (priNum < 20) {
        return teens[priNum % 10]
    }
    if (priNum < 100) {
        return tens[(priNum - (priNum%10))/10] + ' ' + singles[priNum % 10];
    }
    return intToWords((priNum - priNum%100)/100) + ' Hundred ' + intToWords(priNum%100);
}

var singles = ',One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten'.split(',');
var teens = 'Ten,Eleven,Twelve,Thirteen,Fourteen,Fifteen,Sixteen,Seventeen,Eighteen,Nineteen,'.split(',');
var tens = ',,Twenty,Thirty,Forty,Fifty,Sixty,Seventy,Eighty,Ninety'.split(',');