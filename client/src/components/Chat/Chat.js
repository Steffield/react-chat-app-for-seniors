import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.scss";

import Header from "../Header/Header";
import SideText from "../SideText/SideText";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  const ServerPort = "localhost:3001";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ServerPort);

    setName(name);
    setRoom(room);

    console.log(socket);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert("There has been an error. Please try again!");
      }
    });
    //unmount or cleanup lifecycle method
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

  console.log(message, messages);
  console.log(users);

  return (
    <div className="chatOuterContainer">
      <div className="chatInnerContainer">
        <Header room={room} name={name} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <SideText users={users} />
    </div>
  );
};

export default Chat;
