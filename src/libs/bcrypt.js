const bcryptjs = require('bcryptjs');

const hashPassword = (pwd, cb) => {
  bcryptjs.genSalt(10, (errSalt, salt) => {
    if (errSalt) {
      return cb(errSalt);
    }
    bcryptjs.hash(pwd, salt, cb);
  });
};

const comparePasswords = (password, hashedPassword, cb) => {
  bcryptjs.compare(password, hashedPassword, cb);
};

module.exports = { comparePasswords, hashPassword };
