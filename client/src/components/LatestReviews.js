import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";
import Preview from "../components/Preview";

const LatestReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await axios.get("/api/v1/posts/limit/3");
    const reviews = await response.data;
    await setReviews(reviews);
  };

  let reviewDisplay = null;
  if (reviews) {
    reviewDisplay = reviews.map((review, index) => (
      <Preview
        key={review._id}
        index={index}
        id={review._id}
        title={review.title}
        bodyText={review.bodyText}
        cover={review.bookCover}
        rating={review.rating}
        author={review.author}
      />
    ));
  }

  return <Fragment>{reviewDisplay}</Fragment>;
};

export default LatestReviews;
