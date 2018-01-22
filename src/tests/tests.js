const {
  postLoginCorrect,
  postLoginFalsePassword,
  postLoginFalseUsername,
  postLoginMissingUsername,
  postLoginMissingPassword
} = require('./controllers/loginTests');

postLoginCorrect();
postLoginFalseUsername();
postLoginFalsePassword();
postLoginMissingUsername();
postLoginMissingPassword();
