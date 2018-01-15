const dbConnection = require('../dbConnection');

const insertProject = (projectObj, cb) => {
  const insertProjectQuery = {
    text: `insert into projects (title, user_id, category_id, skills, description, budget, dead_line, lifetime)
    values ($1, $2, $3, $4, $5, $6, $7, $8)`,
    values: [
      projectObj.title, projectObj.userId, projectObj.categoryId, projectObj.skills,
      projectObj.description, projectObj.budget, projectObj.deadLine, projectObj.lifetime,
    ],
  };
  dbConnection.query(insertProjectQuery, (dbConnErr, queryResult) => {
    if (dbConnErr) {
      return cb(dbConnErr);
    }
    return cb(null, queryResult);
  });
};

module.exports = insertProject;
