import React from "react";
import { Link } from "react-router-dom";

import starIcon from "../assets/star.svg";
import latestBg from "../assets/latest-bg.png";

const Preview = ({ id, index, title, bodyText, cover, rating, author }) => {
  let stars = Array.apply(0, Array(rating)).map(() => 0);

  stars = stars.map((star, index) => (
    <li key={index} aria-hidden="true">
      <img className="star" src={starIcon} alt="" />
    </li>
  ));

  let excerpt = "";
  const limit = 40;
  const contentArr = bodyText.split(" ");
  for (let i = 0; i < limit; i++) {
    excerpt = `${excerpt} ${contentArr[i]} `;
  }
  excerpt = excerpt + ". . .";

  let bg = null;
  if (index % 2 === 0) {
    bg = <img className="latest-bg" src={latestBg} aria-hidden="true" alt="" />;
  }

  return (
    <section className="latest-review">
      <div className="container">
        <div className="left">
          <h2>{title}</h2>
          <div className="review-meta">
            <span aria-label={`Authored by ${author}`} className="author-name">
              {author}
            </span>
            <ul aria-label={`${rating} star rating`} className="star-list">
              {stars}
            </ul>
          </div>
          <p>{excerpt}</p>
          <Link className="btn btn-bg" to={`/review/${id}`}>
            Full Review
          </Link>
        </div>
        <div className="right">
          <img className="cover" src={cover} alt="" />
        </div>
      </div>
      {bg}
    </section>
  );
};

export default Preview;
