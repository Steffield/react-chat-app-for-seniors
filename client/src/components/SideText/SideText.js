import React from "react";
import "./SideText.scss";

const SideText = ({ users, handleColorChange, handleFontsizeChange }) => {
  console.log(users);

  // useEffect(() => {
  //   if (fontSize === false) {
  //     const body = document.querySelector("body");
  //   }
  // }, []);

  return (
    <>
      <aside className="sideText">
        <div>
          <h2>Welcome to our simple and adjustable chat room!</h2>
          <h3 className="instruction">
            At the top left you see the name of your chat room and everyone in
            the chatroom is listed on the bottom right. If you are in the wrong
            room or want to exit the chat, click the top right X to leave the
            chat room. You can increase the font size and contrast below.
          </h3>
        </div>
        <div>
          <h3>
            <div className="checkbox mt-20 mr-15">
              <input
                type="checkbox"
                className="toggle"
                id="changeFontSize"
                name="fontsize"
                onChange={handleFontsizeChange}
              />
              <label for="changeFontSize" style={{ marginLeft: "15px" }}>
                Increase Front Size
              </label>
            </div>
            <div className="checkbox mt-20 mr-15">
              <input
                type="checkbox"
                className="toggle"
                id="changeContrast"
                name="contrast"
                onChange={handleColorChange}
              />
              <label for="changeContrast" style={{ marginLeft: "15px" }}>
                More Color Contrast
              </label>
            </div>
          </h3>
        </div>
        {users ? (
          <div>
            <h2>The people in this chat room are:</h2>
            <div className="activeContainer">
              <ul>
                {users.map(({ name }, i) => (
                  <li key={i} className="activeItem">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                    {/* <img alt="Online Icon" src={onlineIcon}/> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p>no other users in this chat</p>
        )}
      </aside>
    </>
  );
};

export default SideText;
