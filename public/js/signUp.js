// Developer Notes:::
// Alerts and all the console.log functions will be replaced with a model later.

const select = element => document.querySelector(element);

const validateUsr = usr => usr.match(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/) && usr.length >= 5;
const validatePwd = (pwd, pwdConfirmation) => pwd === pwdConfirmation && pwd.length >= 8;
const validateEmail = email => email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const signUp = () => {
  const signUpData = {
    username: select('#usr').value,
    email: select('#email').value,
    pwd: select('#pwd').value,
    pwdConfirmation: select('#pwd-confirmation').value,
  };
  const isValidUsr = validateUsr(signUpData.username);
  const isValidPwd = validatePwd(signUpData.pwd, signUpData.pwdConfirmation);
  const isValidEmail = validateEmail(signUpData.email);
  if (!isValidUsr) {
    return alert('Username must be at least 5 characters, contains only alphanumericals.');
  } else if (!isValidEmail) {
    return alert('Email must be real!');
  } else if (!isValidPwd) {
    return alert('Passwords must match.');
  }

  const usrData = {
    usr: signUpData.username,
    email: signUpData.email,
    pwd: signUpData.pwd,
  };

  const headers = {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(usrData),
  };

  fetch('/signup', headers)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(err => console.log(err));
  return null;
};

select('#submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  signUp();
});
