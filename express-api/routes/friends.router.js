const express = require("express");

const friendController = require("../controllers/friends.controller");

const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});

friendRouter.post("/", friendController.postFriend);
friendRouter.get("/", friendController.getFriends);
friendRouter.get("/:friendId", friendController.getFriend);

module.exports = friendRouter;
