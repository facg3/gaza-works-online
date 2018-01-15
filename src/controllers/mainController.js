const express = require('express');
const dbCon = require('../database/dbConnection');

const router = express.Router();

router.get('/', (req, res) => {
  dbCon.query('select * from projects', (dbConError, selectProjectsResult) => {
    if (dbConError) {
      return res.status(500).send({ error: dbConError });
    }
    return res.send({ result: selectProjectsResult });
  });
});

module.exports = router;
