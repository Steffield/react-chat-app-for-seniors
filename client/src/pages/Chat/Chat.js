import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.scss";

import Header from "../../components/Header/Header";
import SideText from "../../components/SideText/SideText";
import Messages from "../../components/Messages/Messages";
import Input from "../../components/Input/Input";
// import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [fontSize, setFontSize] = useState(false);
  const [colorContrast, setColorContrast] = useState(false);

  const ServerPort = "localhost:3001";

  const handleFontsizeChange = () => {
    fontSize === false ? setFontSize(true) : setFontSize(false);
    console.log(fontSize);
  };

  const handleColorChange = () => {
    colorContrast === false ? setColorContrast(true) : setColorContrast(false);
    console.log(colorContrast);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.querySelector(".chatBoxTitle");
    const h2 = document.querySelector("h2");
    const h3 = document.querySelector("h3");
    const inst = document.querySelector(".instruction");
    const sideText = document.querySelector(".sideText");
    const sendBtn = document.querySelector(".sendButton");
    const chat = document.querySelector(".chatInnerContainer");
    if (fontSize === false) {
      body.style.fontSize = "1.1em";
      header.style.fontSize = "1.1em";
      sideText.style.fontSize = "1.1em";
      h2.style.fontSize = "24px";
      h3.style.fontSize = "1.3em";
      sendBtn.style.fontSize = "1.1em";
      inst.style.fontSize = "18px";
      chat.style.height = "80%";
      sideText.style.height = "80%";
    } else {
      body.style.fontSize = "1.5em";
      header.style.fontSize = "1.5em";
      sideText.style.fontSize = "1.5em";
      h2.style.fontSize = "1.3em";
      h3.style.fontSize = "1.3em";
      sendBtn.style.fontSize = "1.5em";
      inst.style.fontSize = "24px";
      chat.style.height = "90%";
      sideText.style.height = "90%";
    }
    console.log(body.style.fontSize);
  }, [handleFontsizeChange]);

  useEffect(() => {
    const body = document.querySelector("body");
    const label = document.querySelector(".checkbox");
    const sideText = document.querySelector(".sideText");
    const sendBtn = document.querySelector(".sendButton");
    const people = document.querySelector("ul");

    if (colorContrast === false) {
      body.style.backgroundColor = "#ededed";
      body.style.color = "black";
      people.style.color = "black";
      sideText.style.color = "black";
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      sideText.style.color = "white";
      people.style.color = "white";
    }
    console.log(body.style.fontSize);
  }, [handleColorChange]);

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
    <>
      <Header room={room} name={name} />
      {/* <WeatherInfo /> */}

      <div className="chatOuterContainer">
        <div className="chatInnerContainer">
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <SideText
          users={users}
          handleColorChange={handleColorChange}
          handleFontsizeChange={handleFontsizeChange}
        />
      </div>
    </>
  );
};

export default Chat;
