function problem5(money) {
  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = moneyUnit.map((unit) => {
    const need = Math.floor(money / unit);
    money %= unit;
    return need;
  });
  return answer;
}

module.exports = problem5;
