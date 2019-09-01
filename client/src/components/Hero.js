import React, { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <section className="container hero">
        <div className="intro-text">
          <h1>We Review Books</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
          <a href="/all-reviews" className="btn btn-bg">
            Take Me There
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
