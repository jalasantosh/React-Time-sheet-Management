import React from "react";
import { Route, Switch } from "react-router-dom";
import AddClient from "./addClient";
import AddProject from "./addProject";
import LoginScreen from "./loginScreen";

const MainContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/addClient">
          <AddClient />
        </Route>

        <Route path="/addProject">
          <AddProject />
        </Route>

        <Route path="/">
          <h1>In Development</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
