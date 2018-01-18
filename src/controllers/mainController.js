const express = require('express');

const homePage = require('./homePage');
const login = require('./login');

const router = express.Router();

router.get('/', homePage.get);
router.post('/login', login.process);

module.exports = router;
