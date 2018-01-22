const express = require('express');

const validators = require('../libs/validators');

const homePage = require('./homePage');
const signUp = require('./signUp');
const login = require('./login');

const router = express.Router();

router.get('/', homePage.get);
router.get('/signup', signUp.get);
router.post('/signup', validators.signUpValidator, signUp.post);
router.post('/login', login.process);

module.exports = router;
