import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.scss";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer right floated">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox bgUser">
        <p className="messageText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer left floated">
      <div className="messageBox bgOtherUser">
        <p className="messageText">{ReactEmoji.emojify({ text })}</p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
