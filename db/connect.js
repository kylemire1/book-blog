const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(console.log("Connected to DB"))
  .catch(error => console.error(error));

module.exports = mongoose;
