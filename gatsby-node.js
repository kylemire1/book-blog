const path = require("path");

exports.createPages = async ({ node, actions, graphql, reporter }) => {
  const reviewTemplate = path.resolve("./src/templates/review.js");

  const res = await graphql(`
    query {
      allContentfulReview(sort: { order: DESC, fields: createdAt }) {
        nodes {
          slug
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panic("Error running GraphQL query while creating pages.");
    return;
  }

  //Create paginated list of all reviews
  const posts = res.data.allContentfulReview.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "all-reviews" : `/all-reviews/${i + 1}`,
      component: path.resolve("./src/templates/review-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        numPosts: posts.length
      }
    });
  });

  //Create pages for individual reviews
  posts.forEach(node => {
    actions.createPage({
      path: `/review/${node.slug}/`,
      component: reviewTemplate,
      context: {
        slug: node.slug
      }
    });
  });
};
