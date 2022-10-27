function problem6(forms) {
  const emailSet = new Set();
  forms.forEach(([email, _], idx) => {
    if (!validateEmail(email)) return;
    if (emailSet.has(email)) return;

    const nicknames = compareNicknames(idx, forms);
    nicknames.forEach((email) => {
      emailSet.add(email);
    });
  });

  return [...emailSet].sort();
}

function compareNicknames(curIdx, forms) {
  const targetNickname = forms[curIdx][1];
  const regString = makeRegString(targetNickname);
  const regExp = makeReg(regString);
  const matchedIdx = forms.findIndex((form, idx) => {
    if (idx === curIdx) return false;
    const [_, comparedNickname] = form;
    return !!comparedNickname.match(regExp)[0];
  });
  return matchedIdx !== -1 ? [forms[curIdx][0], forms[matchedIdx][0]] : [];
}

function validateEmail(email) {
  return email.match(/@email.com/);
}

function makeRegString(word) {
  const wordArr = word.split("");
  const regStringArr = wordArr.map((alpha, idx) => {
    if (idx === wordArr.length - 1) return "";
    return `(${alpha}${wordArr[idx + 1]})?`;
  });
  return regStringArr.join("");
}

function makeReg(regString) {
  return new RegExp(regString, "g");
}

module.exports = problem6;
