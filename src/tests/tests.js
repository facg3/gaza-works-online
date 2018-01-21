const test = require('tape');
const homePage = require('./controllers/homePage');
const signUp = require('./controllers/signUp');

homePage.getHomePage();
signUp.getSignUp();
signUp.postOKSignUp();
signUp.postBadSignUp();
