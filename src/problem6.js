function problem6(forms) {
  const emailSet = new Set();
  forms.forEach(([email, nickname], idx) => {
    if (!validateEmail(email)) return;
    if (emailSet.has(email)) return;

    const nicknames = compareNicknames(nickname, forms);
    nicknames.forEach((email) => {
      emailSet.add(email);
    });
  });

  return [...emailSet].sort();
}

function compareNicknames(targetNickname, forms) {
  const regString = makeRegString(targetNickname);
  const regExp = makeReg(regString);
  return filterForms(regExp, forms).map(([email, _]) => email);
}

function filterForms(regExp, forms) {
  const filteredForms = forms.filter((form) => {
    const [_, comparedNickname] = form;
    return !!comparedNickname.match(regExp)[0];
  });
  if (filteredForms.length === 1) return [];
  return filteredForms;
}

function validateEmail(email) {
  return email.match(/@email.com/g);
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
