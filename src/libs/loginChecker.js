const check = (req, res, next) => {
  if (req.cookies) {
    req.logged = req.cookies.logged_in && true;
  }
  next();
}

module.exports = check;
