/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  //Populate queues
  const qOpen = "".padStart(n, "(").split("");
  const qClose = "".padStart(n, ")").split("");

  const doIt = (num, qO, qC, str) => {
    if (qO.length === 0 && qC.length === 1) {
      //Last time
      str += qC.pop();
      result.push(str);
    } else if (qO.length === num && qC.length === num) {
      // First time
      str += qO.pop();
      doIt(num, qO, qC, str);
    } else {
      // Any other time
      if (qO.length) {
        const qO2 = Array.from(qO);
        const str1 = str + qO2.pop();
        doIt(num, qO2, qC, str1);
      }

      if (qC.length && qO.length !== qC.length) {
        const qC2 = Array.from(qC);
        const str2 = str + qC2.pop();
        doIt(num, qO, qC2, str2);
      }
    }
  };

  doIt(n, qOpen, qClose, "");

  return result;
};

document.querySelector("#gp1").innerHTML = generateParenthesis(2);
document.querySelector("#gp2").innerHTML = generateParenthesis(3);
document.querySelector("#gp3").innerHTML = generateParenthesis(4);
