const joi = require('joi');

const signUpSchema = {
  username: joi.string().alphanum().min(5).max(30)
    .required(),
  email: joi.string().email(),
  pwd: joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/),
  pwdConfirmation: joi.string().valid(joi.ref('pwd')).required(),
};

const validate = (req, res, next) => {
  const {
    username, pwd, pwdConfirmation, email,
  } = req.body;
  const isValid = joi.validate({
    username, email, pwd, pwdConfirmation,
  }, signUpSchema);
  if (isValid.error) {
    return res.status(400).send({
      msg: 'Sign Up Details Are Not Valid',
      err: isValid.error,
    });
  }

  return next();
};

module.exports = validate;
