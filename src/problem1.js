function problem1(pobi, crong) {
  if (impossiblePage(pobi) || impossiblePage(crong)) return -1;

  const pobiScore = Math.max(makeScore(pobi[0]), makeScore(pobi[1]));
  const crongScore = Math.max(makeScore(crong[0]), makeScore(crong[1]));

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  return 0;
}

function impossiblePage(pages) {
  const [page1, page2] = pages;
  if (page2 - page1 !== 1) return true;
  if (!(page1 & 1)) return true;
  if (Math.max(page1, page2) > 400) return true;
  if (Math.min(page1, page2) < 1) return true;
  return false;
}

function makeScore(number) {
  const numToArr = String(number).split("");

  const plusResult = numToArr.reduce((acc, cur) => acc + Number(cur), 0);
  const multiplyResult = numToArr.reduce((acc, cur) => acc * Number(cur), 1);

  return Math.max(plusResult, multiplyResult);
}

module.exports = problem1;
