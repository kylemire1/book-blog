const { check, validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  check(req.body.title).isString();
  check(req.body.bodyText).isString();
  check(req.body.bookCover).isString();
  check(req.body.rating).isNumeric();
  check(req.body.author).isString();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = validateRequest;
