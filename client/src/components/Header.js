import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" /> <span className="logo">BookWorm</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/all-reviews">All Reviews</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
