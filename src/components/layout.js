import React, { useEffect, useState } from "react";
import { Location } from "@reach/router";
import "../styles/index.css";
import Nav from "./nav";
import Footer from "./footer";

const Layout = props => {
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

  console.log(scrollDistance);

  let linkColor = "white";
  let headerBg = "transparent";
  if (scrollDistance > 220) {
    linkColor = "black";
    headerBg = "white";
  }

  return (
    <Location>
      {({ location }) => (
        <>
          <header
            style={{
              background: location.pathname === "/" ? headerBg : "white"
            }}
          >
            <Nav linkColor={location.pathname === "/" ? linkColor : "black"} />
          </header>
          <main>{props.children}</main>
          <footer>{location.pathname === "/" && <Footer />}</footer>
        </>
      )}
    </Location>
  );
};

export default Layout;
