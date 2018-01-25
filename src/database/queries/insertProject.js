const connection = require('../dbConnection');

const insertProject = (projectDetails, cb) => {
  const insertQuery = {
    text: 'INSERT INTO projects (user_id, title, deadline, lifetime, budget, description,  status) values ((select id from users where username=$1), $2, $3, $4, $5, $6, $7)',
    values: [projectDetails.username,
      projectDetails.title,
      projectDetails.deadline,
      projectDetails.lifetime,
      projectDetails.budget,
      projectDetails.description,
      0],
  };
  connection.query(insertQuery, (insertErr, insertRes) => {
    if (insertErr) {
      return cb(insertErr);
    }
    return cb(null, insertRes);
  });
};

module.exports = { insertProject };
