import React from "react";
import { Link } from "react-router-dom";

import starIcon from "../assets/star.svg";

const ReviewCard = ({ id, title, bodyText, cover, rating, author }) => {
  let stars = Array.apply(null, Array(rating)).map(() => 0);

  stars = stars.map((star, index) => (
    <li key={index} aria-hidden="true">
      <img className="star" src={starIcon} alt="" />
    </li>
  ));

  return (
    <div className="review-card">
      <div className="left">
        <h2>{title}</h2>
        <div className="review-meta">
          <span className="author-name">{author}</span>
          <ul className="star-list">{stars}</ul>
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
