const express = require('express');

const homePage = require('./homePage');
const singleCategory = require('./singleCategory');
const categories = require('./categories');

const router = express.Router();

router.get('/', homePage.get);
router.get('/categories', categories.get);
router.get('/singleCategory', singleCategory.get);

module.exports = router;
