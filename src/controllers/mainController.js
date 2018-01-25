const express = require('express');

const validators = require('../libs/validators');
const homePage = require('./homePage');
const singleCategory = require('./singleCategory');
const categories = require('./categories');
const signUp = require('./signUp');
const log = require('./log');
const { Error404NotFound } = require('./errors');
const viewProject = require('./viewProject');
const project = require('./project');

const router = express.Router();

router.get('/', homePage.get);
router.post('/login', validators.loginValidator, log.in);
router.get('/logout', log.out);
router.get('/signup', signUp.get);
router.post('/signup', validators.signUpValidator, signUp.post);
router.get('/categories', categories.get);
router.get('/categories/:singleCategory', singleCategory.get);
router.get('/categories/:singleCategory/:singleProject', viewProject.get);
router.get('/postProject', project.get);
router.post('/postProject', project.post);
router.use(Error404NotFound);

module.exports = router;
