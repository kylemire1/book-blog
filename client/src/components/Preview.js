import React from "react";
import { Link } from "react-router-dom";

const Preview = ({ id, title, bodyText, cover, rating, author }) => {
  return (
    <section className="container">
      <div>
        <h2>{title}</h2>
        <div>
          <span>{author}</span>
          <span> {rating}</span>
        </div>
        <p>{bodyText}</p>
        <Link className="btn btn-bg" to={`/posts/${id}`}>
          Full Review
        </Link>
      </div>
      <div>
        <img style={styles.image} src={cover} />
      </div>
    </section>
  );
};

export default Preview;

const styles = {
  image: {
    width: "400px",
    borderRadius: "18px"
  }
};
