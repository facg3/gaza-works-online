const e404 = (req, res) => {
  res.status(404).render('404', { layout: false });
};

const e500 = (err, req, res, next) => {
  res.status(500).render('500', { layout: false });
};

module.exports = {
  e404,
  e500,
};
