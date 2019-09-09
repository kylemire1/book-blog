import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import singleBg from "../assets/latest-bg.png";
import Spinner from "./Spinner";

import starIcon from "../assets/star.svg";

const SingleReview = props => {
  const [reviewID] = useState(props.match.params.id);
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    const response = await axios.get(`/api/v1/posts/${reviewID}`);
    const review = await response.data;
    setReview(review);
    setLoading(false);
  };

  let stars = Array.apply(0, Array(review.rating)).map(() => 0);

  stars = stars.map((star, index) => (
    <li key={index} aria-hidden="true">
      <img className="star" src={starIcon} alt="" />
    </li>
  ));

  let reviewDisplay = null;
  if (review) {
    reviewDisplay = (
      <Fragment>
        <h1>{review.title}</h1>
        <div className="review-meta">
          <span
            aria-label={`Authored by ${review.author}`}
            className="author-name"
          >
            By {review.author}
          </span>
          <ul aria-label={`${review.rating} star rating`} className="star-list">
            {stars}
          </ul>
        </div>
        <p>{review.bodyText}</p>
      </Fragment>
    );
  }

  return (
    <main className=" subpage-content">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="review-container container">
            <div className="left">
              {reviewDisplay}
              <Link to="/all-reviews/">
                <i className="fas fa-arrow-left"></i> Back to All Reviews
              </Link>
            </div>
            <div className="right">
              <img className="cover" alt="" src={review.bookCover} />
            </div>
          </div>
          <img src={singleBg} alt="" className="single-bg" />
        </Fragment>
      )}
    </main>
  );
};

export default SingleReview;
