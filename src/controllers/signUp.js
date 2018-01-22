const queries = require('../database/queries/queries');
const bcrypt = require('../libs/bcrypt');

exports.get = (req, res) => {
  res.render('signUp', { title: 'Gaza Works Online - Sign Up', style: 'signUp' });
};

// Scripts will be emplemented for SignUp process completion
exports.post = (req, res) => {
  const usrObj = {
    usr: req.body.username,
    pwd: req.body.pwd,
    email: req.body.email,
  };
  queries.selectUserByUsername(usrObj.usr, (selectWithUsrErr, selectWithUsrRes) => {
    if (selectWithUsrErr) {
      return res.status(500).send({
        msg: 'Internal Server Error: selectWithUsrErr',
        err: selectWithUsrErr,
      });
    } else if (selectWithUsrRes.rowCount !== 0) {
      return res.send({
        msg: 'Username Already Exists',
      });
    }
    queries.selectUserByEmail(usrObj.email, (selectWithEmailErr, selectWithEmailRes) => {
      if (selectWithEmailErr) {
        return res.status(500).send({
          msg: 'Internal Server Error: selectWithEmailErr',
          err: selectWithEmailErr,
        });
      } else if (selectWithEmailRes.rowCount !== 0) {
        return res.send({
          msg: 'Email Address Already Exists',
        });
      }
      bcrypt.hashPassword(usrObj.pwd, (hashingErr, hashedPwd) => {
        if (hashingErr) {
          return res.status(500).send({
            msg: 'Internal Server Error: hashingErr',
            err: hashingErr,
          });
        }
        usrObj.pwd = hashedPwd;
        queries.insertUser(usrObj, (insertErr, insertRes) => {
          if (insertErr) {
            return res.status(500).send({
              msg: 'Internal Server Error: InsertErr',
              err: insertRes,
            });
          } else if (insertRes.rowCount !== 1) {
            return res.status(500).send({
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
