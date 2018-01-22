const express = require('express');

const validators = require('../libs/validators');
<<<<<<< HEAD
=======

>>>>>>> 376bbd626982c1b61fbebf502d806504bbd6fec4
const homePage = require('./homePage');
const signUp = require('./signUp');
const login = require('./login');
const errors = require('./errors');

const router = express.Router();

router.get('/', homePage.get);
<<<<<<< HEAD
router.post('/login', validators.loginValidator, login.post);
router.use(errors.e404);
router.use(errors.e500);
=======
router.get('/signup', signUp.get);
router.post('/signup', validators.signUpValidator, signUp.post);
router.post('/login', login.process);
>>>>>>> 376bbd626982c1b61fbebf502d806504bbd6fec4

module.exports = router;
