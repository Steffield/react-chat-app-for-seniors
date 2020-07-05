import React from "react";
import Nav from "./component/Nav";
import BGImg from "./component/BGImg";
import Button from "./component/Button";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <>
      <BGImg />
      <Nav />
      <Button />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Chat App for Seniors</p>
    //   </header>
    // </div>
  );
}

export default App;
