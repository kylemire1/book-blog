import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero-intro";
import LatestReviews from "../components/latest-reviews";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Your Source for Reviews on Hot New Books'
        description='Welcome to BookWorm, your source for reviews on hot new books, and some not so new.'
      />
      <Hero />
      <LatestReviews />
    </Layout>
  );
};

export default IndexPage;
