import React from "react";
import { Location } from "@reach/router";
import "../styles/index.css";
import Nav from "./nav";
import Footer from "./footer";

const Layout = props => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
      <footer>
        <Location>
          {({ location }) => location.pathname === "/" && <Footer />}
        </Location>
      </footer>
    </>
  );
};

export default Layout;
