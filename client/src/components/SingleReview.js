import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const SingleReview = props => {
  const [reviewID] = useState(props.match.params.id);
  const [review, setReview] = useState({});

  useEffect(() => {
    fetchReview();
  });

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
    <main className="container subpage-content">
      <Link to="/all-reviews/">
        <i class="fas fa-arrow-left"></i> Back to All Reviews
      </Link>
      {reviewDisplay}
    </main>
  );
};

export default SingleReview;
