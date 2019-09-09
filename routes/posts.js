const express = require("express");
const router = express.Router();

const Post = require("../db/models/post");
const validateRequest = require("../middleware/validateRequest");

router.get("/posts/", async (req, res) => {
  try {
    const posts = await Post.find();

    return res.send(posts);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.get("/posts/limit/:limit", async (req, res) => {
  try {
    let { limit } = req.params;

    const posts = await Post.find().limit(parseInt(limit));

    return res.send(posts);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    return res.send(post);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.post("/posts/", validateRequest, async (req, res) => {
  try {
    const { title, bodyText, bookCover, rating, author } = req.body;
    const token = req.headers.token;

    if (token === process.env.TOKEN) {
      let post = new Post({
        title,
        bodyText,
        bookCover,
        rating,
        author
      });

      post = await post.save();

      return res.send(post);
    } else {
      return res.status(403).json({ message: "Access Denied" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, bodyText, bookCover, rating, author } = req.body;
    const token = req.headers.TOKEN;

    if (token === process.env.token) {
      let post = await Post.findById(id);

      if (title) post.title = title;
      if (bodyText) post.bodyText = bodyText;
      if (bookCover) post.bookCover = bookCover;
      if (rating) post.rating = rating;
      if (author) post.author = author;

      const result = await post.save();

      return res.send(result);
    } else {
      return res.status(403).json({ message: "Access Denied" });
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    return res.send(post);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

module.exports = router;
