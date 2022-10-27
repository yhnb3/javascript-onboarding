function problem2(cryptogram) {
  if (cryptogram.length === 1) return cryptogram;

  let compareString;
  const alphaSet = new Set(cryptogram.split(""));

  do {
    compareString = cryptogram;
    cryptogram = deleteDuplication(compareString, alphaSet);
  } while (cryptogram && compareString !== cryptogram);

  return cryptogram;
}

function deleteDuplication(string, alphaSet) {
  alphaSet.forEach((alpha) => {
    string = string.replace(alpha + alpha, "");
  });
  return string;
}

module.exports = problem2;
