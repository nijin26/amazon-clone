import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/Navigation/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout"></Route>
        <Route path="/login"></Route>
        <Route path="/">
          <NavBar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
