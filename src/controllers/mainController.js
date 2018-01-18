const express = require('express');

const homePage = require('./homePage');
const signUp = require('./signUp');

const router = express.Router();

router.get('/', homePage.get);
router.get('/signup', signUp.get);
router.post('/signup', signUp.post);

module.exports = router;
