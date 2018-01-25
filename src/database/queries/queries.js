const { selectCatProjects } = require('./selectCatProjects');
const { selectCategories } = require('./selectCategories');
const { insertUser } = require('./insertUser');
const {
  selectUserByUsername,
  selectUserByEmail,
} = require('./selectUser');
const { viewProject } = require('./viewProject');
const { insertProject } = require('./insertProject');

module.exports = {
  insertUser,
  selectUserByUsername,
  selectUserByEmail,
  selectCategories,
  selectCatProjects,
  viewProject,
  insertProject,
};
