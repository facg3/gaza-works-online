const loginValidator = require('./loginValidator');
const signUpValidator = require('./signUpValidator');

module.exports = {
  loginValidator: loginValidator.validate,
  signUpValidator
};
