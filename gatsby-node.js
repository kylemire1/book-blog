const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== "ContentfulReview") return;

  actions.createPage({
    path: `/review/${node.slug}/`,
    component: path.resolve("./src/templates/review.js"),
    context: {
      slug: node.slug
    }
  });
};
