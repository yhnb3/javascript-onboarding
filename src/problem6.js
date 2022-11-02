function problem6(forms) {
  const emailSet = new Set();
  const formsWithRegExp = forms.map(([email, nickname]) => [
    email,
    nickname,
    makeRegExp(nickname),
  ]);
  formsWithRegExp.forEach(([email, , regExp]) => {
    if (!validateEmail(email)) return;
    if (emailSet.has(email)) return;

    const filteredEmails = filterEmail(regExp, forms);
    addEamil(filteredEmails, emailSet);
  });
  return [...emailSet].sort();
}

function addEamil(emails, emailSet) {
  emails.forEach((email) => {
    emailSet.add(email);
  });
}

function filterEmail(regExp, forms) {
  const filteredForms = forms.filter(([_, nickname]) => nickname.match(regExp));
  if (filteredForms.length === 1) return [];
  return filteredForms.map(([email, _]) => email);
}

function validateEmail(email) {
  return email.match(/@email.com/g);
}

function makeRegExp(word) {
  const wordArr = word.split("");
  const arrForComapre = wordArr.map((alpha, idx) => {
    if (idx === wordArr.length - 1) return `${wordArr[idx - 1]}${alpha}`;
    return `${alpha}${wordArr[idx + 1]}`;
  });
  arrForComapre.pop();
  return new RegExp(arrForComapre.join("|"), "g");
}

module.exports = problem6;
