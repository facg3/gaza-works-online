const { Pool } = require('pg');
const url = require('url');

const env = require('env2');

env('./config.env');
const dbUrl = process.env.ENV !== 'testing' ? DATABASE_URL : DATABASE_URL_TEST

if (!process.env.dbUrl) {
  return new Error('Environment variable dbUrl must be set');
}

const params = url.parse(process.env.dbUrl);

const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
};

if (username) { options.user = username; }
if (password) { options.password = password; }

options.ssl = (options.host !== 'localhost');

module.exports = new Pool(options);
