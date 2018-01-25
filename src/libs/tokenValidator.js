const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { SECRET } = process.env;

const validate = (req, res, next) => {
  if (req.cookies && req.cookies.logged_in) {
    jwt.verify(req.cookies.accessToken, SECRET, (err) => {
      if (err) res.allowed = false;
      else res.allowed = true;
    });
  } else res.allowed = true;
  next();
};

module.exports = validate;
