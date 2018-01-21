const compareLogin = require('../database/queries/compareLogin');
const jwt = require('jsonwebtoken');
const secret = require('env2')('../config.env').SECRET;

exports.post = (req, res) => {
  // console.log('cooooooooooockie', req.cookie);
  // if (!req.cookies) {
  //
  // }
  compareLogin.compare(req.body, (err, compareResponse) => {
    if (err) throw new Error(err);
    res.cookie('somename', 'somevalue', { maxAge: 6000 });
    res.status(200).send({ login_Status: compareResponse });
  });
};
