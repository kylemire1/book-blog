import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import LatestReviews from "../components/LatestReviews";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <main>
        <LatestReviews />
      </main>
      <footer>
        <h3>Want more?</h3>
        <Link className="btn btn-nobg" to="/all-reviews">
          See All Reviews
        </Link>
      </footer>
    </Fragment>
  );
};

export default Home;
