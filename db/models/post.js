const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  bodyText: {
    type: String,
    required: true
  },
  bookCover: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  posted: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
