const { Pool } = require('pg');
const url = require('url');

const env = require('env2');

env('./config.env');

const dbUrl = process.env.NODE_ENV !== 'testing' ? process.env.DATABASE_URL : process.env.DATABASE_URL_TEST;

module.exports = new Pool({
  connectionString: dbUrl,
});
