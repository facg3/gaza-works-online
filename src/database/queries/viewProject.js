const connect = require('../dbConnection');

function viewProject(projectId, cb) {
  const sqlQueries = {
    text: 'SELECT * FROM projects where id=$1',
    values: [projectId],
  };
  connect.query(sqlQueries, (err, res) => {
    if (err) return cb(err);
    return cb(err, res);
  });
}

module.exports = {
  viewProject,
};
