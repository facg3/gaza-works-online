const bcryptjs = require('bcryptjs');

const hashPassword = (pwd, cb) => {
  bcryptjs.genSalt(10, (errSalt, salt) => {
    if (errSalt) {
      return cb(errSalt);
    }
<<<<<<< HEAD
    bcryptjs.hash(pwd, salt, cb);
=======
    bcryptjs.hash(pwd, salt, (errHashing, hash) => {
      if (errHashing) {
        return cb(errHashing);
      }
      return cb(null, hash);
    });
>>>>>>> 376bbd626982c1b61fbebf502d806504bbd6fec4
  });
};

const comparePasswords = (password, hashedPassword, cb) => {
<<<<<<< HEAD
  bcryptjs.compare(password, hashedPassword, cb);
=======
  bcryptjs.compare(password, hashedPassword, (errorComparing, passOrNot) => {
    if (errorComparing) {
      return cb(errorComparing);
    }
    return cb(null, passOrNot);
  });
>>>>>>> 376bbd626982c1b61fbebf502d806504bbd6fec4
};

module.exports = { comparePasswords, hashPassword };
