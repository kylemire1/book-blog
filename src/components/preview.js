import React from "react";
import { Link } from "gatsby";
import Stars from "./stars";
import Excerpt from "./excerpt";

import latestBg from "../assets/latest-bg.png";

const Preview = ({ id, index, title, bodyText, cover, rating, author }) => {
  let bg = null;
  if (index % 2 === 0) {
    bg = <img className='latest-bg' src={latestBg} aria-hidden='true' alt='' />;
  }
  return (
    <section className='latest-review'>
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
          <img className='cover' src={cover} alt='' />
        </div>
      </div>
      {bg}
    </section>
  );
};

export default Preview;
