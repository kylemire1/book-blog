import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div
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
          <h1>Whoops! You're not supposed to be here.</h1>
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
