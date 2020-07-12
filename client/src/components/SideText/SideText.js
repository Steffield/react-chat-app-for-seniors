import React from "react";
import "./SideText.scss";

const SideText = ({ users }) => {
  console.log(users);
  return (
    <div className="sideText">
      <div>
        <h2>Welcome to our simple and adjustable chat room!</h2>
        <h3>
          Check if you the right people are in this chat room and if the are
          start sending them messages. If they are not, check if you are in the
          right chat room by looking at the top of the screen and if it isn't
          the right room , leave the chat room by clicking the x in the top
          right of the screen.
        </h3>
      </div>
      {users ? (
        <div>
          <h2>The people in this chat room are:</h2>
          <div className="activeContainer">
            <ul>
              {users.map(({ name }, i) => (
                <li key={i} className="activeItem">
                  {name}
                  {/* <img alt="Online Icon" src={onlineIcon}/> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>no other users in this chat</p>
      )}
    </div>
  );
};

export default SideText;
