import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Preview from "./review-preview";

const LatestReviews = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulReview(limit: 3, sort: { order: DESC, fields: createdAt }) {
        nodes {
          contentful_id
          author
          rating
          title
          cover {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
          slug
          excerpt {
            internal {
              content
            }
          }
        }
      }
    }
  `);

  const reviews = data.allContentfulReview.nodes;
  console.log(reviews);
  return (
    <>
      {reviews.map((review, i) => (
        <Preview
          key={review.contentful_id}
          index={i}
          id={review.slug}
          title={review.title}
          bodyText={review.excerpt.internal.content}
          cover={review.cover.fluid}
          rating={review.rating}
          author={review.author}
        />
      ))}
    </>
  );
};

export default LatestReviews;
