const bcryptjs = require('bcryptjs');

const hashPassword = (pwd, cb) => {
  bcryptjs.genSalt(10, (errSalt, salt) => {
    if (errSalt) {
      return cb(errSalt);
    }
    bcryptjs.hash(pwd, salt, (errHashing, hash) => {
      if (errHashing) {
        return cb(errHashing);
      }
      return cb(null, hash);
    });
    return null;
  });
  return null;
};

const comparePasswords = (password, hashedPassword, cb) => {
  bcryptjs.compare(password, hashedPassword, (errorComparing, passOrNot) => {
    if (errorComparing) {
      return cb(errorComparing);
    }
    return cb(null, passOrNot);
  });
  return null;
};

module.exports = { comparePasswords, hashPassword };
