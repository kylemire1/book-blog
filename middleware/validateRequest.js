const { check, validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  check(req.body.title)
    .exists()
    .isString();
  check(req.body.bodyText)
    .exists()
    .isString();
  check(req.body.bookCover)
    .exists()
    .isString();
  check(req.body.rating)
    .exists()
    .isNumeric();
  check(req.body.author)
    .exists()
    .isString();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = validateRequest;
