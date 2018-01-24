const connection = require('../dbConnection');

exports.compare = (loginData, cb) => {
  const findUserQuery = {
    text: 'SELECT * FROM users WHERE (LOWER(username)=$1 OR LOWER(email)=$1);',
    values: [loginData.username],
  };
  connection.query(findUserQuery, (dbErr, dbResult) => {
    if (dbErr) return cb(dbErr);
    return cb(null, dbResult);
  });
};
