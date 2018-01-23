const { selectCatProjects } = require('./selectCatProjects');
const { selectCategories } = require('./selectCategories');
const { insertUser } = require('./insertUser');
const {
  selectUserByUsername,
  selectUserByEmail,
} = require('./selectUser');

module.exports = {
  insertUser,
  selectUserByUsername,
  selectUserByEmail,
  selectCategories,
  selectCatProjects,
};
