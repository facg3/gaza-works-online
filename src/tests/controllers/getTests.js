const supertest = require('supertest');
const app = require('../../app.js');
const test = require('tape');

test('Test Endpoint: /', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) return err;
      t.equal(res.statusCode, 200, 'Get For (\'/\') Should Return with status: 200');
      t.equal(res.type, 'text/html', 'Get For (\'/\') Should Return with content-type of: text/html');
      t.end();
    });
});

test.onFinish(() => process.exit(0));
