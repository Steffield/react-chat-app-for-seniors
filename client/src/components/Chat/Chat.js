import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.scss";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  const ServerPort = process.env.PORT || "localhost:3001";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ServerPort);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert("There has been an error. Please try again!");
      }
    });
    //unmount
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ServerPort, location.search]);

  //useEffect for handling messages
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" ? sendMessage(e) : null)}
        />
      </div>
    </div>);
  );


export default Chat;
