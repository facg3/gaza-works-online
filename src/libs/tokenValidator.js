const jwt = require('jsonwebtoken');
require('env2')('config.env');

const {
  SECRET
} = process.env;

const validate = (req, res, next) => {
  if (req.cookies && req.cookies.logged_in) {
    const decoded = jwt.verify(req.cookies.accessToken, SECRET);
    res.allowed = decoded && true;
  }
  next();
};

module.exports = validate;
