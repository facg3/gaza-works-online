const test = require('tape');
const homePage = require('./controllers/homePage');
const signUp = require('./controllers/signUp');

homePage.getHomePage();
signUp.getSignUp();
signUp.postSignUp200();
signUp.postBadSignUp();
