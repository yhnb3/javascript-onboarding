function problem3(number) {
  const numbers = Array(number)
    .fill(0)
    .map((_, idx) => idx + 1);
  return numbers.reduce((acc, cur) => acc + countClap(cur), 0);
}

function countClap(number) {
  const [matchString] = String(number).match(/[369]+/g) || [""];
  return matchString.length;
}

module.exports = problem3;
