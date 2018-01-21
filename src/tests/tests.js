const loginTest = require('./controllers/loginTests');

loginTest.postLoginCorrect();
loginTest.postLoginFalseUsername();
loginTest.postLoginFalsePassword();
loginTest.postLoginMissingUsername();
loginTest.postLoginMissingPassword();
