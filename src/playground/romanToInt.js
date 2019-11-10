/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s) {
      return 0;
    }
    
    const isSpecialCase = (prevChar, currChar) => {
      if (prevChar === 'I' && ((currChar === 'V') || currChar === 'X')){
        return true;
      }
      
      if (prevChar === 'X' && ((currChar === 'L') || currChar === 'C')){
        return true;
      }
      
      if (prevChar === 'C' && ((currChar === 'D') || currChar === 'M')){
        return true;
      }
      
      
      return false;
    };
    
    const convertSpecial = (specialCase) => {
      switch (specialCase) {
        case 'IV':
          return 4;
        case 'IX':
          return 9;
        case 'XL':
          return 40;
        case 'XC':
          return 90;
        case 'CD':
          return 400;
        case 'CM':
          return 900;
      }
    };
    
    const convert = (str) => {
      if (!str) {
        return 0;
      }
      
      const times = str.length;
      switch(str.substring(0,1)){
        case "I":
          return times;
        case 'V':
          return 5 * times;
        case "X":
          return 10 * times;
        case 'L':
          return 50 * times;
        case "C":
          return 100 * times;
        case 'D':
          return 500 * times;
        case 'M':
          return 1000 * times;
      }
    }
    
    let result = 0;
    let prevChar = '';
    let currStr = '';
    
    for(let i=0; i < s.length; i++){
      let currChar = s[i];
      if (prevChar === '' || prevChar === currChar) {
        prevChar = currChar;
        currStr += currChar;
        continue;
      }
      
      if (isSpecialCase(prevChar, currChar)){
        result += convert(currStr.substring(0, currStr.length-1)) + convertSpecial(prevChar + currChar);
        currStr = '';
      } else {
        result += convert(currStr);
        currStr = currChar;
      }
      prevChar = currChar;
    }
    result += convert(currStr);
    
    return result;
  };
  
document.querySelector('#rti1').innerHTML = romanToInt('III');
document.querySelector('#rti2').innerHTML = romanToInt('IX');
document.querySelector('#rti3').innerHTML = romanToInt('MCMXCIV');