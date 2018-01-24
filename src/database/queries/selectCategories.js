const connect = require('../dbConnection');

function selectCategories(cb) {
  const sqlQueries = {
    text: 'SELECT category FROM categories',
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb(errorConnectingToDB);
    return cb(errorConnectingToDB, res.rows);
  });
}

module.exports = {
  selectCategories,
};
