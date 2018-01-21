const connection = require('../dbConnection');

const insertUser = (userObj, cb) => {
  const insertQuery = {
    text: 'INSERT INTO users (username, email, password) values ($1, $2, $3)',
    values: [userObj.usr, userObj.email.toLowerCase(), userObj.pwd],
  };
  connection.query(insertQuery, (insertErr, insertRes) => {
    if (insertErr) {
      return cb(insertErr);
    }
    return cb(null, insertRes);
  });
  return null;
};

module.exports = insertUser;
