import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.less";
import AddClient from "./screens/addClient";
import AddProject from "./screens/addProject";
import MainScreen from "./screens/mainScreen";
import LoginScreen from "./screens/loginScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? (
        <MainScreen />
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
