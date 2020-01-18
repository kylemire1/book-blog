require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    author: "Kyle Lemire",
    title: "Home",
    titleTemplate: "BookWorm | %s",
    description: "Timely reviews of popular new books.",
    url: "https://gatsby-bookworm.netlify.com/", // No trailing slash allowed!
    siteUrl: "https://gatsby-bookworm.netlify.com/"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BookWorm`,
        short_name: `BookWorm`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#B273FE`,
        display: `standalone`
      }
    },
    `gatsby-plugin-offline`
  ]
};
