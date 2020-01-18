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
          review {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  `);

  const reviews = data.allContentfulReview.nodes;
  return (
    <>
      {reviews.map((review, i) => (
        <Preview
          key={review.contentful_id}
          index={i}
          id={review.slug}
          title={review.title}
          bodyText={review.review.content[0].content[0].value}
          cover={review.cover.fluid}
          rating={review.rating}
          author={review.author}
        />
      ))}
    </>
  );
};

export default LatestReviews;
