const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(server);
const router = express.Router();
// const { joinUser, removeUser } = require("./users");

router.use(express.static(path.join(__dirname, "/static")));

io.on("connection", (socket) => {
  console.log("Someone Connected!");
  socket.on("chat", (message) => {
    io.emit("chat", { message, id: socket.id });
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("Listening On Port", port);
});
