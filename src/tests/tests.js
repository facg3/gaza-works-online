const { getHomePage } = require('./controllers/homePage');
const {
  postLoginCorrect,
  postLoginFalsePassword,
  postLoginFalseUsername,
  postLoginMissingUsername,
  postLoginMissingPassword
} = require('./controllers/loginTests');
const {
  getSignUp,
  postSignUp200,
  postBadSignUp
} = require('./controllers/signUp');

getHomePage();

postLoginCorrect();
postLoginFalseUsername();
postLoginFalsePassword();
postLoginMissingUsername();
postLoginMissingPassword();

getSignUp();
postSignUp200();
postBadSignUp();
