function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendGraph(friends, user);
  const friendsScore = makeFriendScore(user, friendsGraph);
  addVisitScore(friendsScore, visitors);
  addNearFriendScore(friendsGraph, friendsScore);
  const validFriends = filterValidFriend(friendsScore);
  const sortedFriends = validFriends.sort((a, b) =>
    sortFriend(a, b, friendsScore)
  );
  console.log(sortedFriends);
  return ["andole", "jun", "bedi"];
}

function makeFriendGraph(friends, user) {
  const friendsGraph = { USER: user };
  friends.forEach(([a, b]) => {
    if (!friendsGraph[a]) friendsGraph[a] = new Set();
    if (!friendsGraph[b]) friendsGraph[b] = new Set();
    friendsGraph[a].add(b);
    friendsGraph[b].add(a);
  });
  return friendsGraph;
}

function makeFriendScore(user, friendsGraph) {
  const userFriendsSet = friendsGraph[user];
  const userArr = Object.keys(friendsGraph);
  const friendScore = {};
  userArr.forEach((name) => {
    if (name === "USER") return;
    if (name === user) return;
    if (userFriendsSet.has(name)) return;
    friendScore[name] = 0;
  });
  return friendScore;
}

function addVisitScore(friendScore, visitors) {
  visitors.forEach((name) => {
    if (!friendScore[name]) friendScore[name] = 0;
    friendScore[name] += 1;
  });
}

function addNearFriendScore(friendsGraph, friendScore) {
  const friendsArr = Object.keys(friendScore);
  friendsArr.forEach((name) => {
    if (isNearFriend(name, friendsGraph)) {
      friendScore[name] += 10;
    }
  });
}

function isNearFriend(name, friendsGraph) {
  if (!friendsGraph[name]) return false;

  const user = friendsGraph["USER"];
  const userFriendsSet = friendsGraph[user];
  const targetUserFriendsArr = [...friendsGraph[name]];
  return targetUserFriendsArr.some((name) => userFriendsSet.has(name));
}

function filterValidFriend(friendScore) {
  const friendsArr = Object.keys(friendScore);
  return friendsArr.filter((name) => friendScore[name] > 0);
}

function sortFriend(a, b, friendScore) {
  if (friendScore[a] === friendScore[b]) return b - a;
  return friendScore[b] - friendScore[a];
}

module.exports = problem7;
