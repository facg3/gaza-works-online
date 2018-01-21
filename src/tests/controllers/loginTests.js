const supertest = require('supertest');
const app = require('../../app.js');
const test = require('tape');

const username = 'someusername';
const falseUsername = '#somefalseusername';
const password = 'somepassword';
const falsePassword = '#somefalsePassword';

const postLoginCorrect = () => {
  test('Test posting to /login', (t) => {
    supertest(app)
      .post('/login')
      .send({
        username,
        password
      })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        console.log(err);
        t.equal(res.statusCode, 200, 'posting correct data for (\'/login\') should return with status: 200');
        t.end();
      });
  });
};

const postLoginFalseUsername = () => {
  test('Test posting false username data to /login', (t) => {
    supertest(app)
      .post('/login')
      .send({ username: falseUsername, password })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(400)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 400, 'posting false data for (\'/\') should return with status: 400');
        t.equal(res.text, 'youAreNotSupposedToBeHere', 'a validation error should happen over here');
        t.end();
      });
  });
};

const postLoginFalsePassword = () => {
  test('Test posting false password data to /login', (t) => {
    supertest(app)
      .post('/login')
      .send({ username, password: falsePassword })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(400)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 400, 'posting false data for (\'/\') should return with status: 400');
        t.equal(res.text, 'youAreNotSupposedToBeHere', 'a validation error should happen over here');
        t.end();
      });
  });
};

const postLoginMissingUsername = () => {
  test('Test posting data missing username to /login', (t) => {
    supertest(app)
      .post('/login')
      .send({ password })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(400)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 400, 'posting missing data for (\'/\') should return with status: 400');
        t.equal(res.text, 'youAreNotSupposedToBeHere', 'a validation error should happen over here');
        t.end();
      });
  });
};

const postLoginMissingPassword = () => {
  test('Test posting data missing password to /login', (t) => {
    supertest(app)
      .post('/login')
      .send({ username })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(400)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 400, 'posting missing data for (\'/\') should return with status: 400');
        t.equal(res.text, 'youAreNotSupposedToBeHere', 'a validation error should happen over here');
        t.end();
      });
  });
};

test.onFinish(() => process.exit(0));

module.exports = {
  postLoginCorrect,
  postLoginFalseUsername,
  postLoginFalsePassword,
  postLoginMissingUsername,
  postLoginMissingPassword
};
