const { getHomePage } = require('./controllers/homePage');
const {
  postLoginCorrect,
  postLoginFalsePassword,
  postLoginFalseUsername,
  postLoginMissingUsername,
  postLoginMissingPassword,
} = require('./controllers/loginTests');
const {
  getSignUp,
  postSignUp200,
  postBadSignUp,
} = require('./controllers/signUp');

postLoginCorrect();
postLoginFalseUsername();
postLoginFalsePassword();
postLoginMissingUsername();
postLoginMissingPassword();

getHomePage();

getSignUp();
postSignUp200();
postBadSignUp();
