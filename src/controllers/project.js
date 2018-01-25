const { insertProject } = require('../database/queries/queries');
const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { SECRET } = process.env;
exports.post = (req, res) => {
  if (req.logged) {
    const tokenDecoded = jwt.verify(req.cookies.accessToken, SECRET);
    req.body.username = tokenDecoded.username;
    insertProject(req.body, (err, dbRes) => {
      if (err) {
        return new Error(`${err}`);
      } else if (dbRes.rowCount !== 1) {
        return res.status(400).send({
          msg: 'Bad Request: Project Submition Failed',
          res: dbRes,
        });
      }
      return res.send({ msg: 'ProjectSubmittedSuccessfully' });
    });
  } else {
    res.render('404', { layout: false });
  }
};

exports.get = (req, res) => {
  if (req.logged) {
    res.render('postProject', { title: 'Post Project', style: 'postProject', logged: true });
  } else {
    res.status(401).send({ msg: '401 Error! Unauthorized' });
  }
};
