const fs = require('fs');
const path = require('path');
const connection = require('./dbConnection');

const buildScripts = fs.readFileSync(path.join(__dirname, 'build.sql')).toString();

connection.query(buildScripts, (err, res) => {
  if (err) {
    return err;
  }
  connection.end();
  return console.log('Database have been built.', res);
});
