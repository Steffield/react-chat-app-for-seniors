import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.scss";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [fontSize, setFontSize] = useState(false);
  const [contrastChange, setContrastChange] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleFontsizeChange = (e) => {
    setFontSize(e.target.value);
    console.log(fontSize);
  };

  const handleColorChange = (e) => {
    setContrastChange(e.target.value);
    console.log(contrastChange);
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Chatroom</h1>
        <div>
          <input
            placeholder="Enter Your Name"
            className="joinInput"
            type="text"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            placeholder="Enter the Chatroom Number"
            className="joinInput mt-20"
            type="text"
            onChange={handleRoomChange}
          />
        </div>
        <div className="ui checked checkbox mt-20 mr-15">
          <input
            type="checkbox"
            // checked=""
            name="fontsize"
            value="true"
            onChange={handleFontsizeChange}
          />
          <label>Increase Font Size</label>
        </div>
        <div className="ui checked checkbox mt-20">
          <input
            type="checkbox"
            name="contrast"
            // checked=""
            value="true"
            onChange={handleColorChange}
          />
          <label>More Color Contrast</label>
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="ui secondary button btn" type="submit">
            {/* <div className="btnMask"> */}
            <span>Sign In</span>
            {/* </div> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
