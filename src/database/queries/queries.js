const { selectCatProjects } = require('./selectCatProjects');
const { selectCategories } = require('./selectCategories');
const { postProject } = require('./postProject');
const { viewProject } = require('./viewProject');

module.exports = {
  selectCategories,
  selectCatProjects,
  postProject,
  viewProject,
};
