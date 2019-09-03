import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import singleBg from "../assets/latest-bg.png";

const SingleReview = props => {
  const [reviewID] = useState(props.match.params.id);
  const [review, setReview] = useState({});

  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    const response = await axios.get(`/api/v1/posts/${reviewID}`);
    const review = await response.data;
    await setReview(review);
  };

  let reviewDisplay = null;
  if (review) {
    reviewDisplay = (
      <Fragment>
        <h1>{review.title}</h1>
        <p>By {review.author}</p>
        <p>{review.bodyText}</p>
      </Fragment>
    );
  }

  return (
    <main className=" subpage-content">
      <div className="review-container container">
        <div className="left">
          <Link to="/all-reviews/">
            <i className="fas fa-arrow-left"></i> Back to All Reviews
          </Link>
          {reviewDisplay}
        </div>
        <div className="right">
          <img className="cover" alt="" src={review.bookCover} />
        </div>
      </div>
      <img src={singleBg} alt="" className="single-bg" />
    </main>
  );
};

export default SingleReview;
