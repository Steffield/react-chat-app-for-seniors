import React from "react";
import "./SideText.scss";

const SideText = ({ users }) => {
  return (
    <div className="sideText">
      <div>
        <h1>add description</h1>
      </div>
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  {/* <img alt="Online Icon" src={onlineIcon}/> */}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : (
        <p>no other users in this chat</p>
      )}
    </div>
  );
};

export default SideText;
