const joi = require('joi');

const schema = {
  username: joi.string().alphanum().min(5).required(),
  password: joi.string().regex(/^[a-zA-Z0-9!@#$%^&*(){}<>?"']{8,}$/).required()
};

const validate = (req, res, next) => {
  const { username, password } = req.body;
  const valid = joi.validate({ username, password }, schema);
  if (!valid.error) {
    return next();
  }
  return res.status(400).send('youAreNotSupposedToBeHere');
};

module.exports = validate;
