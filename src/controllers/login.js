const compareLogin = require('../database/queries/compareLogin');

exports.post = (req, res) => {
  compareLogin.compare(req.body, (err, compareResponse) => {
    if (err) throw new Error(err);
    res.status(200).send({ login_Status: compareResponse });
  });
};
