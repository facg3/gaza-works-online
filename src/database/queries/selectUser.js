const connection = require('../dbConnection');

const selectUserByUsername = (username, cb) => {
  const selectQuery = {
    text: 'SELECT FROM users WHERE LOWER(username) = LOWER($1)',
    values: [username],
  };
  connection.query(selectQuery, (selectErr, selectRes) => {
    if (selectErr) {
      return cb(selectErr);
    }
    return cb(null, selectRes);
  });
};

const selectUserByEmail = (email, cb) => {
  const selectQuery = {
    text: 'SELECT FROM users WHERE email = $1',
    values: [email.toLowerCase()],
  };
  connection.query(selectQuery, (selectErr, selectRes) => {
    if (selectErr) {
      return cb(selectErr);
    }
    return cb(null, selectRes);
  });
};

module.exports = {
  selectUserByUsername,
  selectUserByEmail,
};
