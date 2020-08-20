import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/Navigation/NavBar/NavBar";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout">
          <NavBar />
        </Route>
        <Route path="/login"></Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
