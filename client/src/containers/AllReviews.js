import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import Spinner from "../components/Spinner";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await axios.get("/api/v1/posts/");
    const reviews = await response.data;
    await setReviews(reviews);
    await setLoading(false);
  };

  let reviewDisplay = null;
  if (reviews) {
    reviewDisplay = reviews.map(review => (
      <ReviewCard
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
    <main className="container subpage-content">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>All Reviews</h1>
          <section className="all-reviews">{reviewDisplay}</section>
        </Fragment>
      )}
    </main>
  );
};

export default AllReviews;
