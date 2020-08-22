import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

import "./Auth.css";

const Auth = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon__logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1> Sign in</h1>
        <form>
          <h5> Email: </h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5> Password: </h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInBtn">
            {" "}
            Sign In
          </button>
        </form>

        <p>
          {" "}
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice. Need help?{" "}
        </p>
        <button onClick={register} className="login__signUpBtn">
          {" "}
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Auth;
