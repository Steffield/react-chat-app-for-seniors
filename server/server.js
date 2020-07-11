// Loading environmental variables here
if (process.env.NODE_ENV !== "production") {
  console.log("loading dev environments");
  require("dotenv").config();
}
require("dotenv").config();

const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const routes = require("./routes/router");

const PORT = process.env.PORT || 3001;

// const { callback } = require("util");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());
app.use(routes);

// If it's production environment!
// if (process.env.NODE_ENV === "production") {
//   const path = require("path");
//   console.log("YOU ARE IN THE PRODUCTION ENV");
//   app.use(
//     "/static",
//     express.static(path.join(__dirname, "../client/build/static"))
//   );
//   app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/"));
//   });
// }

// // Error handler
// app.use(function (err, req, res, next) {
//   console.log("====== ERROR =======");
//   console.error(err.stack);
//   res.status(500);
// });

io.on("connect", (socket) => {
  console.log("new socket connection!");

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to chat room ${user.room}!`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} is now in this chat room, too!`,
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    console.log(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    console.log("sendMessage");
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("user left");
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

// Starting Server
server.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
