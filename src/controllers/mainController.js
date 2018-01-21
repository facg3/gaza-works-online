const express = require('express');

const validators = require('../libs/validators');
const homePage = require('./homePage');
const login = require('./login');
const errors = require('./errors');

const router = express.Router();

router.get('/', homePage.get);
router.post('/login', validators.loginValidator, login.post);
router.use(errors.e404);
router.use(errors.e500);

module.exports = router;
