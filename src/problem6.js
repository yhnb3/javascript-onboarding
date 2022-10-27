function problem6(forms) {
  const emailSet = new Set();
  var answer;
  return answer;
}

function validateEmail(email) {
  return email.match(/@email.com/);
}

function checkDupicatedNickname(nickname1, nickname2) {
  const regString = makeRegString(nickname2);
  const regExp = makeReg(regString);
  return !!nickname1.match(regExp);
}

function makeRegString(word) {
  const wordArr = word.split("");
  const doubleWordArr = wordArr.map((alpha, idx) => {
    if (idx === wordArr.findLastIndex()) return "";
    return `(${alpha}${wordArr[idx + 1]})?`;
  });
  return doubleWordArr.join("");
}

function makeReg(regString) {
  return new RegExp(regString);
}

module.exports = problem6;
