import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.scss";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  console.log(name, user);

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  console.log(isSentByCurrentUser);

  return isSentByCurrentUser ? (
    <div className="messageContainer right floated">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBubble bgUser">
        <p className="messageText">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer left floated">
      <div className="messageBubble bgOtherUser">
        <p className="messageText">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
