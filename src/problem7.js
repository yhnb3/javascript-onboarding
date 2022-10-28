function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendGraph(friends);
  const friendsScore = friendsGraph.keys().filter((name) => name !== user);

  return answer;
}

function makeFriendGraph(friends) {
  const friendsGraph = {};
  friends.forEach((a, b) => {
    if (!friendsGraph[a]) friendsGraph[a] = new Set();
    if (!friendsGraph[b]) friendsGraph[b] = new Set();
    friendsGraph[a].add(b);
    friendsGraph[b].add(a);
  });
  return friendsGraph;
}

function makeFriendScore(user, friendsGraph) {
  const userArr = friendsGraph.keys();
  const friendScore = {};
  userArr.forEach((name) => {
    if (name === userName) return;
    friendScore[name] = 0;
  });
  return friendScore;
}

module.exports = problem7;
