require("dotenv").config();
const express = require("express");
const posts = require("./routes/posts");

const app = express();

const port = process.env.PORT || 5000;

app.use("/", posts);

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});
