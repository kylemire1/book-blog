import React from "react";

import starIcon from "../assets/star.svg";

const Stars = ({ rating }) => {
  let stars = Array.apply(null, Array(rating)).map(() => 0);

  stars = stars.map((star, index) => (
    <li key={index} aria-hidden="true">
      <img className="star" src={starIcon} alt="" />
    </li>
  ));

  return (
    <ul aria-label={`${rating} star rating`} className="star-list">
      {stars}
    </ul>
  );
};

export default Stars;
