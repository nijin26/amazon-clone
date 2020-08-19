import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <img
          src="https://i.imgur.com/brElRal.png"
          className={classes.navbar__logo}
        />
      </Link>
      <div className={classes.searchArea}>
        <input type="text" className={classes.searchInput} />
        <SearchIcon className={classes.searchIcon} />
      </div>

      <div className={classes.navLinks}>
        <Link to="/login" className={classes.link}>
          <div className={classes.option}>
            <span className={classes.optionOne}>Hello Nijin</span>
            <span className={classes.optionTwo}>Sign In</span>
          </div>
        </Link>

        <Link to="/" className={classes.link}>
          <div className={classes.option}>
            <span className={classes.optionOne}>Returns</span>
            <span className={classes.optionTwo}>& Orders</span>
          </div>
        </Link>

        <Link to="/" className={classes.link}>
          <div className={classes.option}>
            <span className={classes.optionOne}>Your</span>
            <span className={classes.optionTwo}>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className={classes.link}>
          <div className={classes.optionBasket}>
            <ShoppingBasketIcon />
            <span className={classes.basketCount}>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
