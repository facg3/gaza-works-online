const {
  selectUserByUsername,
  selectUserByEmail,
  insertUser,
} = require('../database/queries/queries');
const bcrypt = require('../libs/bcrypt');

exports.get = (req, res) => {
  res.render('signUp', { title: 'Gaza Works Online - Sign Up', style: 'signUp' });
};

exports.post = (req, res) => {
  const usrObj = {
    usr: req.body.username,
    pwd: req.body.pwd,
    email: req.body.email,
  };
  selectUserByUsername(usrObj.usr, (selectWithUsrErr, selectWithUsrRes) => {
    if (selectWithUsrErr) {
      return new Error('Internal Server Error: selectWithUsrErr');
    } else if (selectWithUsrRes.rowCount !== 0) {
      return res.send({
        msg: 'Username Already Exists',
      });
    }
    selectUserByEmail(usrObj.email, (selectWithEmailErr, selectWithEmailRes) => {
      if (selectWithEmailErr) {
        return new Error('Internal Server Error: selectWithEmailErr');
      } else if (selectWithEmailRes.rowCount !== 0) {
        return res.send({
          msg: 'Email Address Already Exists',
        });
      }
      bcrypt.hashPassword(usrObj.pwd, (hashingErr, hashedPwd) => {
        if (hashingErr) {
          return new Error('Internal Server Error: hashingErr');
        }
        usrObj.pwd = hashedPwd;
        insertUser(usrObj, (insertErr, insertRes) => {
          if (insertErr) {
            return new Error('Internal Server Error: InsertErr');
          } else if (insertRes.rowCount !== 1) {
            return res.status(400).send({
              msg: 'Username Already Exists',
            });
          }
          // The response Below will be modified to redirect to profile page once it's implemented
          return res.send({
            msg: 'User Successfully Inserted',
          });
        });
      });
    });
  });
};
