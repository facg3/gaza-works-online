const Error404NotFound = (req, res) => {
  res.status(404).render('404', { layout: false });
};

const Error500ServerError = (err, req, res, next) => {
  res.status(500).render('500', { layout: false });
};

module.exports = {
  Error404NotFound,
  Error500ServerError,
};
