import React, { Fragment } from "react";

import bg from "../assets/hero-bg.png";

const Home = () => {
  return (
    <Fragment>
      <section style={styles.section} className="container">
        <div style={styles.heroSpan}>
          <h1>We Review Books</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
          <a href="#" className="btn btn-bg" style={styles.heroBtn}>
            Take Me There
          </a>
        </div>
      </section>
      <img aria-hidden="true" src={bg} alt="" style={styles.heroBg} />
    </Fragment>
  );
};

export default Home;

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(122px, 1fr))",
    gridGap: "1em",
    height: "100vh",
    alignItems: "center"
  },
  heroSpan: {
    gridColumn: "span 4"
  },
  heroBg: {
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: "-1",
    height: "100vh",
    objectFit: "cover",
    objectPosition: "left",
    width: "55vw"
  },
  herBtn: {
    marginTop: "1em"
  }
};
