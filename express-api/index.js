const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
  { id: 0, name: "Taylor Otwell" },
  { id: 1, name: "Ryan Dahl" },
  { id: 2, name: "Jordan Walke" },
];

app.use((req, res, next) => {
  const now = new Date();
  next();
  const delta = new Date() - now;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  const name = req.body.name;

  if (!name) {
    res.status(400).json({ error: "Name field is required." });
    return;
  }

  const newFriend = {
    name: name,
    id: friends.length,
  };

  friends.push(newFriend);

  res.status(201).json(newFriend);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(400).json({ error: "Friend does not exist." });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
