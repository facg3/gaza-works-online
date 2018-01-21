const supertest = require('supertest');
const app = require('../../app.js');
const test = require('tape');

const getHomePage = () => {
  test('Test Endpoint: / With GET METHOD', (t) => {
    supertest(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return err;
        t.equal(res.statusCode, 200, 'Get For (\'/\') Should Return with status: 200');
        t.equal(res.res.statusMessage, 'OK', 'Get For (\'/\') Should Return with statuesMessage: OK)');
        t.equal(res.type, 'text/html', 'Get For (\'/\') Should Return with content-type of: text/html');
        return t.end();
      });
  });
};

module.exports = { getHomePage };
