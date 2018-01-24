const check = (req, res, next) => {
  if (req.cookies) {
    req.logged = Boolean(req.cookies.logged_in);
  }
  next();
}

module.exports = check;
