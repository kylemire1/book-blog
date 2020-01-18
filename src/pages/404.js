import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PageNotFound = () => {
  return (
    <Layout>
      <SEO
        title='Page Not Found'
        description="Whoops! Looks like you tried to reach a page that doesn't exist."
      />
      <div
        id='content'
        className='container subpage-content'
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <div>
          <h1>
            Whoops! Looks like you tried to reach a page that doesn't exist.
          </h1>
          <p style={{ maxWidth: "100%" }}>
            <Link style={{ textDecoration: "underline" }} to='/'>
              Head back home.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
