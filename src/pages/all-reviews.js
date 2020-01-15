import React from "react";

import Layout from "../components/layout";
import ReviewCard from "../components/review-card";

const AllReviews = () => {
  const reviews = [
    {
      id: "1",
      title: "Severance",
      bodyText: "Testing text",
      bookCover:
        "https://images-na.ssl-images-amazon.com/images/I/81A9dFqIEEL.jpg",
      rating: 4,
      author: "Ling Ma"
    },
    {
      id: "2",
      title: "Severance",
      bodyText: "Testing text",
      bookCover:
        "https://images-na.ssl-images-amazon.com/images/I/81A9dFqIEEL.jpg",
      rating: 4,
      author: "Ling Ma"
    },
    {
      id: "3",
      title: "Severance",
      bodyText: "Testing text",
      bookCover:
        "https://images-na.ssl-images-amazon.com/images/I/81A9dFqIEEL.jpg",
      rating: 4,
      author: "Ling Ma"
    },
    {
      id: "4",
      title: "Severance",
      bodyText: "Testing text",
      bookCover:
        "https://images-na.ssl-images-amazon.com/images/I/81A9dFqIEEL.jpg",
      rating: 4,
      author: "Ling Ma"
    }
  ];

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
    <Layout>
      <div className='container subpage-content'>
        <h1>All Reviews</h1>
        <section className='all-reviews'>{reviewDisplay}</section>
      </div>
    </Layout>
  );
};

export default AllReviews;
