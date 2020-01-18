import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, pathname, article, noIndex }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || "/"}`
      };
      return (
        <>
          <Helmet
            htmlAttributes={{ lang: "en" }}
            title={seo.title}
            titleTemplate={titleTemplate}
          >
            <meta name='description' content={seo.description} />
            {noIndex ? <meta name='robots' content='noindex' /> : null}
            {seo.url && <meta property='og:url' content={seo.url} />}
            {(article ? true : null) && (
              <meta property='og:type' content='article' />
            )}
            {seo.title && <meta property='og:title' content={seo.title} />}
            {seo.description && (
              <meta property='og:description' content={seo.description} />
            )}
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

SEO.defaultProps = {
  title: "Kyle Lemire, Chicago Based Web Developer | Home",
  description:
    "I've been developing websites for clients since 2015 and have been working full-time for a Florida-based small business since 2017.",
  image: null,
  pathname: null,
  article: false
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;
