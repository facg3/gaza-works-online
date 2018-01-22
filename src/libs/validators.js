const loginValidator = require('./loginValidator');
const signUpValidator = require('./signUpValidator');

module.exports = {
  signUpValidator,
  loginValidator: loginValidator.validate
};
