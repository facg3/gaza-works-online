const e400 = (req, res) => {
  res.status(400).render('400', { layout: false });
};

const e404 = (req, res) => {
  res.status(404).render('404', { layout: false });
};

const e500 = (req, res) => {
  res.status(500).render('500', { layout: false });
};

module.exports = {
  e400,
  e404,
  e500
}
