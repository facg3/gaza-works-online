const fs = require('fs');
const path = require('path');
const connection = require('./dbConnection');

const buildScripts = fs.readFileSync(path.join(__dirname, 'build.sql'));

connection.query(buildScripts, (err, res) => {
  if (err) {
    return err;
  }
  return console.log('Database have been built.', res);
});
