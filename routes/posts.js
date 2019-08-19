const express = require("express");
const router = express.Router();

const Post = require("../db/models/post");
const validateRequest = require("../middleware/validateRequest");

router.get("/posts", (req, res) => {
  res.json({ message: "Got posts!" });
});

router.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `The id is ${id}` });
});

router.post("/posts/", validateRequest, async (req, res) => {
  try {
    const { title, bodyText, bookCover, rating, author } = req.body;

    let post = new Post({
      title,
      bodyText,
      bookCover,
      rating,
      author
    });

    post = await post.save();

    await res.send(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
