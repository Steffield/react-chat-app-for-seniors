import React from "react";
import "./Header.scss";

const Header = ({ room }) => {
  return (
    // eslint-disable-next-line no-unused-expressions
    <div className="outerContainer">
      <div className="headerContainer">
        <div className="leftHeaderContainer">
          <h3 className="chatBoxTitle">
            <i className="user outline icon mr-2" />
            You are online and in chat room: {room}
          </h3>
        </div>
        <div className="rightHeaderContainer">
          <a href="/">
            <h3 className="chatBoxTitle">
              Leave Room
              <i className="times icon close ml-2" />
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
