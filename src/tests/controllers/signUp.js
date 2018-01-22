const supertest = require('supertest');
const app = require('../../app.js');
const test = require('tape');

const getSignUp = () => {
  test('Test Endpoint: /signup With GET Method', (t) => {
    supertest(app)
      .get('/signup')
      .expect(200)
      .end((err, res) => {
        if (err) return err;
        t.equal(res.statusCode, 200, 'Get For (\'/signup\') Should Return with status: 200');
        t.equal(res.res.statusMessage, 'OK', 'Get For (\'/signup\') Should Return with statuesMessage: OK)');
        t.equal(res.type, 'text/html', 'Get For (\'/signup\') Should Return with content-type of: text/html');
        t.end();
        return null;
      });
    return null;
  });
  return null;
};

const postSignUp200 = () => {
  test('Test Endpoint: /signup With POST Method, 200.OK Test.', (t) => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'UserName',
        email: 'emailaddress@email.com',
        pwd: '**97979797*',
        pwdConfirmation: '**97979797*',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json, text/plain, */*')
      .expect(200)
      .end((err, res) => {
        if (err) return err;
        t.equal(res.statusCode, 200, 'POST For (\'/signup\') Should Return with status: 200');
        t.equal(res.res.statusMessage, 'OK', 'POST For (\'/signup\') Should Return with statuesMessage: OK)');
        t.equal(res.type, 'application/json', 'Get For (\'/signup\') Should Return with content-type of: application/json');
        t.end();
        return null;
      });
    return null;
  });
  return null;
};

const postBadSignUp = () => {
  test('Test Endpoint: /signup With POST Method, 400.Bad Request Test.', (t) => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'B@DU$erN@m#',
        email: 'em@#laddress@email.com',
        pwd: '*97*',
        pwdConfirmation: '*9*',
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json, text/plain, */*')
      .expect(400)
      .end((err, res) => {
        if (err) return err;
        t.equal(res.res.statusCode, 400, 'POST For (\'/signup\') Should Return with status: 400');
        t.equal(res.res.statusMessage, 'Bad Request', 'POST For (\'/signup\') Should Return with statuesMessage: Bad Request)');
        t.equal(res.type, 'application/json', 'Get For (\'/signup\') Should Return with content-type of: application/json');
        t.end();
        return null;
      });
    return null;
  });
  return null;
};

module.exports = {
  getSignUp,
  postSignUp200,
  postBadSignUp,
};
