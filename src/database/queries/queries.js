const insertUser = require('./insertUser');
const selectUser = require('./selectUser');

module.exports = {
  insertUser,
  selectUserByUsername: selectUser.selectUserByUsername,
  selectUserByEmail: selectUser.selectUserByEmail,
};
