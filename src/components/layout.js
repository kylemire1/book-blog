import React from "react";
import "../styles/index.css";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
