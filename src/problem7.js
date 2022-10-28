function problem7(user, friends, visitors) {
  var answer;
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

module.exports = problem7;
