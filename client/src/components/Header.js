import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../assets/logo.svg";

const Header = props => {
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  const [scrollDistance, setScrollDistance] = useState(document.body.scrollTop);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrollDistance(scrolled * 1000);
  };
  console.log(window.innerWidth);
  const linkClasses = [];
  if (props.history.location.pathname === "/" && scrollDistance <= 266) {
    linkClasses.push("white");
  } else {
    linkClasses.push("black");
  }

  const headerClasses = [];
  if (window.innerWidth < 1710 && scrollDistance >= 266) {
    headerClasses.push("white-bg");
  } else {
    headerClasses.push("no-bg");
  }

  return (
    <header className={headerClasses.join(" ")}>
      <Link to="/">
        <img src={logo} alt="" /> <span className="logo">BookWorm</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className={linkClasses.join(" ")} to="/all-reviews">
              All Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
