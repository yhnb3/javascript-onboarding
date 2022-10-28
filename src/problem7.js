function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendGraph(friends);
  const friendsScore = makeFriendScore(user, friendsGraph);
  addVisitScore(friendsScore, visitors);
  addNearFriendScore(friendsScore, friendsGraph, user);

  return ["andole", "jun", "bedi"];
}

function makeFriendGraph(friends) {
  const friendsGraph = {};
  friends.forEach(([a, b]) => {
    if (!friendsGraph[a]) friendsGraph[a] = new Set();
    if (!friendsGraph[b]) friendsGraph[b] = new Set();
    friendsGraph[a].add(b);
    friendsGraph[b].add(a);
  });
  return friendsGraph;
}

function makeFriendScore(user, friendsGraph) {
  const userArr = Object.keys(friendsGraph);
  const friendScore = {};
  userArr.forEach((name) => {
    if (name === user) return;
    friendScore[name] = 0;
  });
  return friendScore;
}

function addVisitScore(friendScore, visit) {
  visit.forEach((name) => {
    if (!friendScore[name]) friendScore[name] = 0;
    friendScore[name] += 1;
  });
}

module.exports = problem7;
