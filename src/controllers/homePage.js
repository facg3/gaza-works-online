exports.get = (req, res) => {
  if (res.allowed) {
    res.render('homePage', { title: 'Gaza Works Online - Home', style: 'homePage', logged: req.logged });
  } else {
    res.render('401', { layout: false });
  }
};
