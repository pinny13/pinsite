var longestPalindrome = function(s) {
  if (!s) {
    return "";
  }

  if (s.length === 1) {
    return s;
  }

  if (s.length === 2) {
    if (s[0] === s[1]) {
      return s;
    }

    return s[0];
  }

  if (isPolindrom(s)) {
    return s;
  }

  let result = s[0];

  function isPolindrom (str) {
    if (!str) {
      return false;
    }

    if (str.length === 1) {
      return true;
    }

    let b = 0;
    let e = str.length - 1;

    while (b < e) {
      if (str[b] !== str[e]) {
        return false;
      }

      b++;
      e--;
    }

    return true;
  };

  const checkIt = (i, b, e) => {
    if (b < 0 || e >= s.length) {
      return;
    }

    let potentialResult = s.substring(b, e + 1);
    if (s[b] === s[e] && isPolindrom(potentialResult)) {
      let potentialResult = s.substring(b, e + 1);
      checkedStrings.set(potentialResult, true);
      if (result.length < potentialResult.length) {
        result = potentialResult;
      }
      checkIt(i, b - 1, e + 1);
    }

    potentialResult = s.substring(i, e + 1);
    if (
      checkedStrings.get(potentialResult) === true ||
      isPolindrom(potentialResult)
    ) {
      checkedStrings.set(potentialResult, true);
      if (result.length < potentialResult.length) {
        result = potentialResult;
      }
      checkIt(i, b, e + 1);
    }

    potentialResult = s.substring(b, i + 1);
    if (
      checkedStrings.get(potentialResult) === true ||
      isPolindrom(potentialResult)
    ) {
      checkedStrings.set(potentialResult, true);
      if (result.length < potentialResult.length) {
        result = potentialResult;
      }
      checkIt(i, b - 1, e);
    }
  };

  const checkedStrings = new Map();

  for (let i = 0; i < s.length; i++) {
    let b = i - 1;
    let e = i + 1;

    checkIt(i, b, e);
  }

  return result;
};

document.querySelector("#lps1").innerHTML = longestPalindrome("babad");
document.querySelector("#lps2").innerHTML = longestPalindrome("cbbd");
document.querySelector("#lps3").innerHTML = longestPalindrome("aba");
document.querySelector("#lps4").innerHTML = longestPalindrome("tattarrattat");
document.querySelector("#lps5").innerHTML = longestPalindrome("ccd");
document.querySelector("#lps6").innerHTML = longestPalindrome("aaaa");
document.querySelector("#lps7").innerHTML = longestPalindrome("222020221");