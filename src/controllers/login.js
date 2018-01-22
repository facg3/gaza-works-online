const compareLogin = require('../database/queries/compareLogin');
const jwt = require('jsonwebtoken');
// const secret = require('env2')('config.env');

exports.post = (req, res) => {
  compareLogin.compare(req.body, (err, compareResponse) => {
    if (err) throw new Error(err);
    res.setHeader('Set-Cookie', ['laggeed=true', 'Max_Age=240*600*600']);
    console.log('abdcds');
    res.send({ login_Status: compareResponse });
  });
};
