const homePage = require('./controllers/homePage');
const signUp = require('./controllers/signUp');

homePage.getHomePage();
signUp.getSignUp();
signUp.postBadSignUp();
signUp.postOKSignUp();
