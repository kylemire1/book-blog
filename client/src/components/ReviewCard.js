import React from "react";
import { Link } from "react-router-dom";

import Stars from "./Stars";

const ReviewCard = ({ id, title, bodyText, cover, rating, author }) => {
  return (
    <div className="review-card">
      <div className="left">
        <h2>{title}</h2>
        <div className="review-meta">
          <span className="author-name">{author}</span>
          <Stars rating={rating} />
        </div>
        <Link className="btn btn-bg" to={`/review/${id}`}>
          Read Review
        </Link>
      </div>
      <div className="right">
        <img className="cover" src={cover} alt="" />
      </div>
    </div>
  );
};

export default ReviewCard;
