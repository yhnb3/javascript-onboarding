function problem1(pobi, crong) {
  if (!possiblePage(pobi) || !possiblePage(crong)) return -1;

  const pobiScore = Math.max(makeScore(pobi[0]), makeScore(pobi[1]));
  const crongScore = Math.max(makeScore(crong[0]), makeScore(crong[1]));

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  return 0;
}

function possiblePage(pages) {
  const page1 = Math.min(pages[0], pages[1]);
  const page2 = Math.max(pages[0], pages[1]);

  if (page2 - page1 !== 1) return false;
  if (!(page1 & 1)) return false;
  if (Math.max(page1, page2) > 400) return false;
  if (Math.min(page1, page2) < 1) return false;
  return true;
}

function makeScore(number) {
  const numToArr = String(number).split("");
  return Math.max(
    numToArr.reduce((acc, cur) => acc + Number(cur), 0),
    numToArr.reduce((acc, cur) => acc * Number(cur), 1)
  );
}

module.exports = problem1;
