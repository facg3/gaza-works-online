const { Pool } = require('pg');
const url = require('url');
<<<<<<< HEAD
const env = require('env2');

env('./config.env');

const dbUrl = process.env.ENV !== 'testing' ? process.env.DATABASE_URL : process.env.DATABASE_URL_TEST;
if (!dbUrl) {
  throw new Error('Environment variable dbUrl must be set');
}
=======
require('env2')('./config.env');

const dbUrl = process.env.NODE_ENV !== 'testing' ? process.env.DATABASE_URL_TEST_LOCAL : process.env.DATABASE_URL_TEST_REMOTE;

if (!dbUrl) {
  throw new Error('Environment variable dbUrl must be set');
}

>>>>>>> 376bbd626982c1b61fbebf502d806504bbd6fec4
const params = url.parse(dbUrl);
const [username, password] = params.auth.split(':');
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
};
<<<<<<< HEAD
if (username) { options.user = username; }
if (password) { options.password = password; }
options.ssl = (options.host !== 'localhost');
=======

if (username) { options.user = username; }
if (password) { options.password = password; }

options.ssl = (options.host !== 'localhost');

>>>>>>> 376bbd626982c1b61fbebf502d806504bbd6fec4
module.exports = new Pool(options);
