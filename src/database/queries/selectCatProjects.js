const connect = require('../dbConnection');

function selectCatProjects(reqCategory, cb) {
  const sqlQueries = {
    text: 'select * from projects where category_id = (select id from categories where LOWER(category) = LOWER($1))',
    values: [reqCategory],
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb(errorConnectingToDB);
    return cb(errorConnectingToDB, res.rows);
  });
}

module.exports = {
  selectCatProjects,
};
