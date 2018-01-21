const fs = require('fs');

const connection = require('./dbConnection');

const buildScripts = fs.readFileSync('./database/build.sql');

connection.query(buildScripts, (err, res) => {
  if (err) {
    return err;
  }
  console.log('Database have been built.', res);
  return connection.end();
});
