import React from "react";
import Join from "./pages/Join/Join";
import Chat from "./pages/Chat/Chat";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
