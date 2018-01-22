const { selectCatProjects } = require('./selectCatProjects');
const { selectCategories } = require('./selectCategories');
const { postProject } = require('./postProject');
const { viewProject } = require('./viewProject');
const { insertUser } = require('./insertUser');
const selectUser = require('./selectUser');

module.exports = {
  insertUser,
  selectUserByUsername: selectUser.selectUserByUsername,
  selectUserByEmail: selectUser.selectUserByEmail,
  selectCategories,
  selectCatProjects,
  postProject,
  viewProject,
};
