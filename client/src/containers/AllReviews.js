import React, { useEffect, useState } from "react";

import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
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
      <h1>All Reviews</h1>
      <section className="all-reviews">{reviewDisplay}</section>
    </main>
  );
};

export default AllReviews;
