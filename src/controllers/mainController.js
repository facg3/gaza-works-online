const express = require('express');

const homePage = require('./homePage');

const router = express.Router();

router.get('/', homePage.get);

module.exports = router;
