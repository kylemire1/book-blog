import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import Stars from "../components/rating-stars";
import SEO from "../components/seo";

const ReviewTemplate = ({ data }) => {
  const review = data.contentfulReview;

  return (
    <Layout>
      <SEO
        title={review.title}
        description={`Read our review of ${review.title} by ${review.author}.`}
      />
      <div id='content' className='review-container container subpage-content'>
        <div className='left'>
          <h1>{review.title}</h1>
          <div className='review-meta'>
            <span
              aria-label={`Authored by ${review.author}`}
              className='author-name'
            >
              By {review.author}
            </span>
            <Stars rating={review.rating} />
          </div>
          {documentToReactComponents(review.review.json)}
          <Link to='/all-reviews/'>&larr; Back to All Reviews</Link>
        </div>
        <div className='right'>
          <Img className='cover' alt='' fluid={review.cover.fluid} />
        </div>
      </div>
    </Layout>
  );
};

export const reviewQuery = graphql`
  query ReviewQuery($slug: String!) {
    contentfulReview(slug: { eq: $slug }) {
      id
      title
      author
      rating
      cover {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid
        }
      }
      review {
        json
      }
    }
  }
`;

export default ReviewTemplate;
