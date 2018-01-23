const compareLogin = require('../database/queries/compareLogin');
const compare = require('../libs/bcrypt');
require('env2')('.config.env');
const jwt = require('jsonwebtoken');

const {
  SECRET
} = process.env;

exports.in = (req, res) => {
  const { username, password } = req.body;
  compareLogin.compare(req.body, (err, dbResult) => {
    if (err) throw new Error(err);
    else if (dbResult.rowCount === 0) {
      return res.send({
        loginStatus: false,
        msg: 'UserNotFound'
      });
    }
    compare.comparePasswords(
      password, dbResult.rows[0].password,
      (bcryptErr, bResult) => {
        if (bcryptErr) throw new Error(bcryptErr);
        const token = jwt.sign({ username, password }, SECRET);
        const maxAge = 1000 * 60 * 60 * 24 * 7; // 7 Days
        res.setHeader('Set-Cookie', [`logged_in=true; max-age=${maxAge}`,
          `accessToken=${token}; max-age=${maxAge}`,
          `userName=${username}; max-age=${maxAge}`]
        );
        res.render('homePage', { title: 'Gaza Works Online - Home', style: 'homePage', logged: true });
        // res.redirect(302, '/');
        // return res.json({ msg:"here we are" })
      }
    );
  });
};

exports.out = (req, res) => {
  res.setHeader('Set-Cookie', ['logged_in=empty; max-age=0',
    'accessToken=empty; max-age=0',
    'userName=empty; max-age=0']);
  // res.render('homePage', { title: 'Gaza Works Online - Home', style: 'homePage', logged: false });
  res.redirect(302, '/');
}
