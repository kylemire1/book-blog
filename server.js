require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const posts = require("./routes/posts");
const db = require("./db/connect");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use("/api/v1/", posts);

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});
