const path = require("path");

exports.createPages = async ({ node, actions, graphql }) => {
  const reviewTemplate = path.resolve("./src/templates/review.js");

  const res = await graphql(`
    query {
      allContentfulReview {
        nodes {
          slug
        }
      }
    }
  `);

  res.data.allContentfulReview.nodes.forEach(node => {
    actions.createPage({
      path: `/review/${node.slug}/`,
      component: reviewTemplate,
      context: {
        slug: node.slug
      }
    });
  });

  // actions.createPage({
  //   path: `/review/${res.data.allContentfulReview.node}/`,
  //   component: reviewTemplate,
  //   context: {
  //     slug: node.slug
  //   }
  // });
};
