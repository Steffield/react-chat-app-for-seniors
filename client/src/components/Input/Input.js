import React from "react";
import "./Input.scss";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    // eslint-disable-next-line no-unused-expressions
    <form className="form">
      <div className="ui fluid action input">
        <input
          className="input"
          type="text"
          placeholder="Type a message to the users in the room."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />

        <button
          className="ui secondary button btn sendButton"
          onClick={(e) => sendMessage(e)}
        >
          <i className="paper plane icon mr-2" />
          Send
        </button>
      </div>
    </form>
  );
};

export default Input;
