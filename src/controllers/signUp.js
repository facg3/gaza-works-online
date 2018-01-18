exports.get = (req, res) => {
  res.render('signUp', { title: 'Gaza Works Online - Sign Up', style: 'signUp' });
};

// Scripts will be emplemented for SignUp process completion
exports.post = (req, res) => {
  res.send(req.body);
};
