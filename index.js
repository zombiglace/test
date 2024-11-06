const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log("message:" + msg);
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
