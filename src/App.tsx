import React from "react";
import logo from "./logo.svg";
import "./App.less";
import AddClient from "./screens/addClient";
import AddProject from "./screens/addProject";
import MainScreen from "./screens/mainScreen";

function App() {
  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

export default App;
