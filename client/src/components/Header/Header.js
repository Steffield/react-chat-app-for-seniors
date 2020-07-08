import React from "react";
import "./Header.scss";

const Header = ({ room }) => {
  return (
    // eslint-disable-next-line no-unused-expressions
    <div className="outerContainer">
      <div className="header">
        <div className="leftInnerContainer">
          <h3 className="chatBoxTitle">
            {" "}
            <i className="user outline icon mr-2" />
            You are online and in chat room: {room}
          </h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/">
            <i className="times icon close" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
