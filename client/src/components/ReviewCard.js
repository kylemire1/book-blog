import React, { Fragment } from "react";

const ReviewCard = ({ id, title, bodyText, cover, rating, author }) => {
  return (
    <Fragment>
      <div>
        <h2>{title}</h2>
        <div>
          <span>{author}</span>
          <span>{rating}</span>
        </div>
        <p>{bodyText}</p>
      </div>
      <img src={cover} />
    </Fragment>
  );
};

export default ReviewCard;
