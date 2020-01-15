import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import LatestReviews from "../components/latest-reviews";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <LatestReviews />
    </Layout>
  );
};

export default IndexPage;
