const express = require("express");
const router = express.Router();

router.get("/posts", (req, res) => {
  res.json({ message: "Got posts!" });
});

module.exports = router;
