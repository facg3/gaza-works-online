const connect = require('../dbConnection');

function postProject(data, cb) {
  const {
    title,
    category,
    skills,
    description,
    budget,
    deadLine,
    lifetime,
  } = data;

  const sqlQueries = {
    text: 'INSERT INTO projects (title, user_id, category_id, skills, description, budget, dead_line, lifetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    values: [title, 1, category, skills, description, budget, deadLine, lifetime],
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb('errorConnectingToDB');
    return cb(errorConnectingToDB, res.rows);
  });
}

module.exports = {
  postProject,
};
