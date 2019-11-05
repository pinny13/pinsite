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

  let result = "";

  const check = (b, e, p) => {
    if (b < 0 || e === s.length) {
      return;
    }

    if (s[b] === s[e]) {
      const potentialResult = s.substring(b, e);
      result =
        result.length < potentialResult.length ? potentialResult : result;
      check(b - 1, e + 1);
    } else {
      check(p, p + 2, p + 1);
      check(b - 2, p, p - 1);
    }
  };

  const middle = Math.floor(s.length / 2);
  const start = middle - 1;
  const end = middle + 1;
  check(start, end, middle);

  return result;
};

document.querySelector('#lps1').innerHTML = longestPalindrome('babad');
document.querySelector('#lps2').innerHTML = longestPalindrome('cbbd');