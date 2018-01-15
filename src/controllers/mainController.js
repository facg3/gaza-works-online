const express = require('express');
const dbCon = require('../database/dbConnection');
const insertProject = require('../database/queries/insertProject');

const router = express.Router();

router.get('/', (req, res) => {
  dbCon.query('select * from projects', (dbConError, selectProjectsResult) => {
    if (dbConError) {
      return res.status(500).send({ error: dbConError });
    }
    return res.send({ result: selectProjectsResult });
  });
  // return res.send('Hello world');
});

router.get('/post-project', (req, res) => {
  const projectObj = {
    title: 'Test Project',
    userId: 1,
    categoryId: 1,
    skills: 'JS,HTML,CSS',
    description: 'It is a test project',
    budget: 5000,
    deadLine: '2018-02-02',
    lifetime: 60,
  };
  insertProject(projectObj, (insertProjectDBConnErr, insertProjectQueryResult) => {
    if (insertProjectDBConnErr) {
      return res.status(500).send({ error: insertProjectDBConnErr });
    } else if (insertProjectQueryResult.rowCount !== 1) {
      return res.send({
        result: insertProjectQueryResult,
        responseText: 'Inserting Project Failed',
      });
    }
    return res.send({
      result: insertProjectQueryResult,
      responseText: 'Inserted Project Successfully',
    });
  });
});


module.exports = router;
