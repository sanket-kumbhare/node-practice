const http = require("http");

const server = http.createServer();

const friends = [
  { id: 0, name: "Taylor Otwell" },
  { id: 1, name: "Ryan Dahl" },
  { id: 2, name: "Jordan Walke" },
];

server.on("request", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const url = req.url.split("/");
  if (req.method == "POST" && url[1] == "friends") {
    req.on("data", (chunks) => {
      let friend = chunks.toString();
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
    return;
  } else if (
    url[1] == "friends" &&
    req.method == "GET" &&
    url.length == 3 &&
    url[2] <= 2
  ) {
    res.setHeader("status", 200);
    const id = Number(url[2]);
    res.write(JSON.stringify(friends[id]));
  } else if (
    url[1] == "friends" &&
    req.method == "GET" &&
    url.length == 3 &&
    url[2] > 2
  ) {
    res.setHeader("status", 404);
    res.write("User not found");
  } else if (url[1] == "friends") {
    res.setHeader("status", 200);
    res.write(JSON.stringify(friends));
  } else {
    res.write("404 page not found");
  }
  res.end();
});

server.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});
