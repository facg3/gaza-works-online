const express = require('express');

const homePage = require('./homePage');

const singleCategory = require('./singleCategory');

const router = express.Router();

router.get('/', homePage.get);
router.get('/singleCategory', singleCategory.get);

module.exports = router;
