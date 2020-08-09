var isPolindrom = function(str) {
    if (!str || str.length === 1) {
        return true;
    }

    let isLengthEven = str.length % 2 === 0;
    let leftEnd = isLengthEven ? str.length/2 + 1 : Math.floor(str.length/2);
    let rightStart = isLengthEven ? leftEnd : leftEnd+1;
    let left = str.substring(0, leftEnd);
    let right = str.substring(rightStart);
    if (left === right.split('').reverse().join('')){
        return true;
    }

    return false;
}

var isPolindrom2 = function(str) {
    if (!str) {
        return false;
    }

    var poliCheck = function(str, b,e) {
        if (b === e) {
            return true;
        }

        if (str[b] !== str[e]){
            return false;
        }

        if (b < e-1){
            return poliCheck(str, b+1, e-1);
        }

        return true;
    }

    return poliCheck(str, 0, str.length-1);
}

var countSubstrings = function(s) {
    let result = 0;
    
    for (let i=0; i <= s.length; i++) {
        for (let j=i+1; j <= s.length; j++){
            let str = s.substring(i,j);
            result = result + +isPolindrom2(str);
        }
    }
    
    return result;
};

var showPolindromResults = function(id, str, f) {
    const e = document.getElementById("pol"+id);
    e.innerHTML = f(str);
}

showPolindromResults(1, "a", isPolindrom2);
showPolindromResults(2, "abcba", isPolindrom2);
showPolindromResults(3, "aaa", isPolindrom2);
showPolindromResults(4, "aabba", isPolindrom2);
showPolindromResults(5, "cc", isPolindrom2);
showPolindromResults(6, "xy", isPolindrom2);
showPolindromResults(7, "abc", countSubstrings);
showPolindromResults(8, "aaa", countSubstrings);