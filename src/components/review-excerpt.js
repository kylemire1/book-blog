import React from "react";

const Excerpt = ({ bodyText, limit }) => {
  let excerpt = "";
  const contentArr = bodyText.split(" ");
  for (let i = 0; i < limit; i++) {
    excerpt = `${excerpt} ${contentArr[i]} `;
  }
  excerpt = excerpt + ". . .";

  return <p>{excerpt}</p>;
};

export default Excerpt;
