import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Stars from "./stars";

const ReviewCard = ({ slug, title, cover, rating, author }) => {
  return (
    <div className='review-card'>
      <div className='left'>
        <h2>{title}</h2>
        <div className='review-meta'>
          <span className='author-name'>{author}</span>
          <Stars rating={rating} />
        </div>
        <Link className='btn btn-bg' to={`/review/${slug}`}>
          Read Review
        </Link>
      </div>
      <div className='right'>
        <Img className='cover' fixed={cover.fixed} alt='' />
      </div>
    </div>
  );
};

export default ReviewCard;
