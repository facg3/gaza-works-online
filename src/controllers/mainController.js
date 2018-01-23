const express = require('express');

const validators = require('../libs/validators');
const homePage = require('./homePage');
const signUp = require('./signUp');
const log = require('./log');
const { Error404NotFound } = require('./errors');

const router = express.Router();

router.get('/', homePage.get);
router.post('/login', validators.loginValidator, log.in);
router.get('/logout', log.out);
router.get('/signup', signUp.get);
router.post('/signup', validators.signUpValidator, signUp.post);
router.use(Error404NotFound);

module.exports = router;
