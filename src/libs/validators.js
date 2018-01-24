const loginValidator = require('./loginValidator');
const signUpValidator = require('./signUpValidator');
const tokenValidator = require('./tokenValidator');
const loginChecker = require('./loginChecker');

module.exports = {
  tokenValidator,
  loginValidator,
  loginChecker,
  signUpValidator,
};
