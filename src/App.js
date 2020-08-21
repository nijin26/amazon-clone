import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/Navigation/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout">
          <NavBar />
          <Checkout />
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
