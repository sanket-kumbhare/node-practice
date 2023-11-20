const express = require("express");

const friendRouter = require("./routes/friends.router");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const now = new Date();
  next();
  const delta = new Date() - now;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/friends", friendRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
