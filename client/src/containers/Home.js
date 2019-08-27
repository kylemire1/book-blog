import React, { Fragment, useEffect, useState } from "react";

import bg from "../assets/hero-bg.png";
import axios from "axios";
import Preview from "../components/Preview";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await axios.get("/api/v1/posts/");
    const reviews = await response.data;
    await setReviews(reviews);
  };

  let reviewDisplay = null;
  if (reviews) {
    reviewDisplay = reviews.map(review => (
      <Preview
        key={review._id}
        id={review._id}
        title={review.title}
        bodyText={review.bodyText}
        cover={review.bookCover}
        rating={review.rating}
        author={review.author}
      />
    ));
  }

  return (
    <Fragment>
      <section className="container">
        <div>
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
      {reviewDisplay}
    </Fragment>
  );
};

export default Home;

const styles = {
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
