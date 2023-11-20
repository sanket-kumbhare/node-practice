const { friends } = require("../models/friends.model");

function postFriend(req, res) {
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ error: "Name field is required." });
    return;
  }

  const newFriend = {
    id: friends.length,
    name: name,
  };

  friends.push(newFriend);
  res.status(201).json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(400).json({ error: "Friend does not exist." });
  }
}

module.exports = {
  postFriend,
  getFriend,
  getFriends,
};
