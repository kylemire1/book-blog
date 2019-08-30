import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";

const SingleReview = props => {
  const [reviewID, setReviewID] = useState(props.match.params.id);
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
        <h2>{review.title}</h2>
        <p>{review.bodyText}</p>
      </Fragment>
    );
  }

  return (
    <div>
      <h1>Single Review</h1>
      {reviewDisplay}
    </div>
  );
};

export default SingleReview;
