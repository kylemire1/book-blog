import React, { Fragment } from "react";

import Hero from "../components/Hero";
import LatestReviews from "../components/LatestReviews";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <LatestReviews />
    </Fragment>
  );
};

export default Home;
