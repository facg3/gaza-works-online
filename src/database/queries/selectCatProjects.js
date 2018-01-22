const connect = require('../dbConnection');

function selectCatProjects(cb) {
  const sqlQueries = {
    text: 'SELECT category.category, projects.title, projects.skills, projects.budget, projects.lifetime, projects.description FROM category INNER JOIN projects on projects.category_id= category.id',
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb('errorConnectingToDB');
    return cb(errorConnectingToDB, res.rows);
  });
}

module.exports = {
  selectCatProjects,
};
