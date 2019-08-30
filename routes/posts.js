const express = require("express");
const router = express.Router();

const Post = require("../db/models/post");
const validateRequest = require("../middleware/validateRequest");

router.get("/posts/", async (req, res) => {
  try {
    const posts = await Post.find();

    return await res.send(posts);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.get("/posts/limit/:limit", async (req, res) => {
  try {
    let { limit } = req.params;

    const posts = await Post.find().limit(parseInt(limit));

    return await res.send(posts);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    return await res.send(post);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
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

    return await res.send(post);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, bodyText, bookCover, rating, author } = req.body;

    let post = await Post.findById(id);

    if (title) post.title = title;
    if (bodyText) post.bodyText = bodyText;
    if (bookCover) post.bookCover = bookCover;
    if (rating) post.rating = rating;
    if (author) post.author = author;

    const result = await post.save();

    return await res.send(result);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    return await res.send(post);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

module.exports = router;