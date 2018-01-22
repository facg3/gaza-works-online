const express = require('express');

const homePage = require('./homePage');
const singleCategory = require('./singleCategory');
const categories = require('./categories');
const postProject = require('./postProject');
const viewProject = require('./viewProject');

const router = express.Router();

router.get('/', homePage.get);
router.get('/categories', categories.get);
router.get('/singleCategory', singleCategory.get);
router.get('/postProject', postProject.getPostProject);
router.post('/postProject', postProject.postProject);
router.get('/viewProject', viewProject.get);

module.exports = router;
