import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import logo from "../assets/logo.svg";

const Nav = ({ linkColor }) => {
  return (
    <>
      <Link to='/'>
        <img src={logo} alt='BookWorm' /> <span className='logo'>BookWorm</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/all-reviews' style={{ color: linkColor }}>
              All Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
