import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import ReviewCard from "../components/review-card";
import SEO from "../components/seo";

const AllReviews = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulReview {
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
  `);

  const reviews = data.allContentfulReview.nodes;
  return (
    <Layout>
      <SEO
        title='All Reviews'
        description="A complete list of all the reviews we've written to date."
      />
      <div id='content' className='container subpage-content'>
        <h1>All Reviews</h1>
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
      </div>
    </Layout>
  );
};

export default AllReviews;
