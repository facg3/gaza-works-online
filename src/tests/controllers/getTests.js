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
<<<<<<< HEAD
test('Test Endpoint: /singleCategory', (t) => {
  supertest(app)
    .get('/singleCategory')
    .expect(200)
    .end((err, res) => {
      if (err) return err;
      t.equal(res.statusCode, 200, 'Get For (\'/\') Should Return with status: 200');
      t.equal(res.type, 'text/html', 'Get For (\'/\') Should Return with content-type of: text/html');
      t.end();
    });
});
=======
>>>>>>> 54ec4bb9fe06c5f74349bf5cfe94110fea07ad32

test.onFinish(() => process.exit(0));
