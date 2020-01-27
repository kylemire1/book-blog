import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import ReviewCard from "../components/review-card";
import Pagination from "../components/pagination";

const ReviewListTemplate = ({ data, pageContext }) => {
  const reviews = data.allContentfulReview.nodes;
  return (
    <Layout>
      <SEO
        title={`Page ${pageContext.currentPage} of All Reviews`}
        description="A complete list of all the reviews we've written to date."
      />
      <div id='content' className='container subpage-content'>
        <h1>All Reviews</h1>
        <p>Showing 6 of {pageContext.numPosts} total reviews.</p>
        <section className='all-reviews'>
          {reviews.map(review => (
            <ReviewCard
              key={review.id}
              slug={review.slug}
              title={review.title}
              cover={review.cover}
              rating={review.rating}
              author={review.author}
            />
          ))}
        </section>
        <Pagination
          numPages={pageContext.numPages}
          currentPage={pageContext.currentPage}
        />
      </div>
    </Layout>
  );
};

export const reviewListQuery = graphql`
  query($skip: Int, $limit: Int) {
    allContentfulReview(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: createdAt }
    ) {
      nodes {
        id
        cover {
          fixed(width: 125) {
            ...GatsbyContentfulFixed_withWebp
          }
          contentful_id
        }
        rating
        title
        author
        slug
      }
    }
  }
`;

export default ReviewListTemplate;
