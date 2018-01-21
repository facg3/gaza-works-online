const connection = require('../dbConnetction');
const compare = require('../../libs/bcrypt.js');

exports.compare = (loginData, cb) => {
  const findUserQuery = {
    text: 'SELECT * FROM users WHERE (LOWER(username)=$1 OR LOWER(email)=$1);',
    values: [loginData.username]
  };
  connection.query(findUserQuery, (dbErr, dbResult) => {
    if (dbErr) return cb(dbErr);
    else if (dbResult.rowCount === 0) return cb(null, 'userNotFound');
    compare.comparePasswords(
      loginData.password, dbResult.rows[0].password,
      (bcryptErr, bResult) => {
        if (bcryptErr) return cb(bcryptErr);
        else if (!bResult) return cb(null, 'wrongLogin');
        return cb(null, 'correctLogin');
      }
    );
  });
};
