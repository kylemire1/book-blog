import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Stars from "./rating-stars";
import Excerpt from "./review-excerpt";

import latestBg from "../assets/latest-bg.png";

const Preview = ({ id, index, title, bodyText, cover, rating, author }) => {
  let bg = null;
  if (index % 2 === 0) {
    bg = <img className='latest-bg' src={latestBg} aria-hidden='true' alt='' />;
  }
  return (
    <section className={`latest-review ${!bg ? "even" : ""}`}>
      <div className='container'>
        <div className='left'>
          <h2>{title}</h2>
          <div className='review-meta'>
            <span aria-label={`Authored by ${author}`} className='author-name'>
              {author}
            </span>
            <Stars rating={rating} />
          </div>
          <Excerpt bodyText={bodyText} limit={40} />
          <Link className='btn btn-bg' to={`/review/${id}`}>
            Full Review
          </Link>
        </div>
        <div className='right'>
          <Img className='cover' fluid={cover} alt='' />
        </div>
      </div>
      {bg}
    </section>
  );
};

export default Preview;
