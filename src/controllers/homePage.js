exports.get = (req, res) => {
  if (req.allowed) {
    return res.render('homePage', { title: 'Gaza Works Online - Home', style: 'homePage', logged: req.logged });
  }
  return res.render('401', { layout: false });
};
