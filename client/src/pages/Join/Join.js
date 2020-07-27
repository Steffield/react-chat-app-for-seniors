import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from "emotion";
import "./Join.scss";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Chatroom</h1>
        <div>
          <label htmlFor="enterName" className="sr-only">
            Enter Your Name
          </label>
          <input
            placeholder="Enter Your Name"
            id="enterName"
            className="joinInput"
            type="text"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="enterRoom" className="sr-only">
            Enter desired chat room
          </label>

          <input
            placeholder="Enter the Chatroom Number"
            id="enterRoom"
            className="joinInput mt-20"
            type="text"
            onChange={handleRoomChange}
          />
        </div>

        <Link
          className="joinBtn"
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="ui secondary button btn" type="submit">
            {/* <div className="btnMask"> */}
            Start Chatting
            {/* </div> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
