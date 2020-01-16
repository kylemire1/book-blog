import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ReviewTemplate = ({ data }) => {
  const review = data.contentfulReview;
  return (
    <Layout>
      <div className='container subpage-content'>
        <h1>{review.title}</h1>
      </div>
    </Layout>
  );
};

export const reviewQuery = graphql`
  query ReviewQuery($slug: String!) {
    contentfulReview(slug: { eq: $slug }) {
      id
      title
    }
  }
`;

export default ReviewTemplate;
