require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
require("./db/connect");
const posts = require("./routes/posts");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use("/api/v1/", posts);

if (process.env.NODE_ENV === "production") {
  // ... other imports
  const path = require("path");

  // ... other app.use middleware
  app.use(express.static(path.join(__dirname, "client", "build")));

  // ...
  // Right before your app.listen(), add this:
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});
