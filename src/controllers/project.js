const insertProject = require('../database/queries/insertProject');
const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { SECRET } = process.env;
exports.post = (req, res) => {
  if (req.logged) {
    const tokenDecoded = jwt.verify(req.cookies.accessToken, SECRET);
    req.body.username = tokenDecoded.username;
    insertProject(req.body, (err, dbRes) => {
      if (err) console.log(err);
      else {
        res.send({ msg: 'ProjectSubmittedSuccessfully' });
      }
    });
  } else {
    res.render('404', { layout: false });
  }
};

exports.get = (req, res) => {
  if (req.logged) {
    res.render('postProject', { title: 'Post Project', style: 'postProject', logged: true });
  } else {
    res.render('404', { layout: false });
  }
};
