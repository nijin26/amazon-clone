import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import classes from "./NavBar.module.css";

import { useStateValue } from "../../../store/StateProvider";
import { auth } from "../../Auth/firebase";

const NavBar = () => {
  const [{ basket, user }] = useStateValue();

  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <img
          src="https://i.imgur.com/brElRal.png"
          className={classes.navbar__logo}
          alt=""
        />
      </Link>
      <div className={classes.searchArea}>
        <input type="text" className={classes.searchInput} />
        <SearchIcon className={classes.searchIcon} />
      </div>

      <div className={classes.navLinks}>
        <Link to={!user && "/login"} className={classes.link}>
          <div onClick={logout} className={classes.option}>
            <span className={classes.optionOne}>
              {" "}
              {`Hello ${user ? user.email : ""}`}{" "}
            </span>
            <span className={classes.optionTwo}>
              {!user ? "Sign In" : "Sign Out"}
            </span>
          </div>
        </Link>

        <Link to="/" className={classes.link}>
          <div className={classes.option}>
            <span className={classes.optionOne}>Returns</span>
            <span className={classes.optionTwo}>& Orders</span>
          </div>
        </Link>

        <Link to="/login" className={classes.link}>
          <div className={classes.option}>
            <span className={classes.optionOne}>Your</span>
            <span className={classes.optionTwo}>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className={classes.link}>
          <div className={classes.optionBasket}>
            <ShoppingBasketIcon />
            <span className={classes.basketCount}> {basket?.length} </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
