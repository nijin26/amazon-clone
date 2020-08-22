import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/Navigation/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Auth from "./Components/Auth/Auth";
import { useStateValue } from "./store/StateProvider";
import { auth } from "./Components/Auth/firebase";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout">
          <NavBar />
          <Checkout />
        </Route>
        <Route path="/login" component={Auth}></Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
