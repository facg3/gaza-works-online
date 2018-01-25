const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { SECRET } = process.env;

const check = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(req.cookies.accessToken, SECRET, (err) => {
      if (err) res.allowed = false;
      else req.logged = true;
    });
  } else req.logged = false;
  next();
};

module.exports = check;
