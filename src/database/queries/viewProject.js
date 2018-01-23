const connect = require('../dbConnection');

function viewProject(projectId, cb) {
  const sqlQueries = {
    text: 'SELECT * FROM projects where id=$1',
    values: [projectId],
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb('errorConnectingToDB');
    return cb(errorConnectingToDB, res);
  });
}

module.exports = {
  viewProject,
};
