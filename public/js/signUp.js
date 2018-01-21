const select = element => document.querySelector(element);
const errSpan = (msg) => {
  if (!select('.error-span')) {
    const span = document.createElement('span');
    span.textContent = msg;
    span.className = 'error-span';
    select('#signup-form').appendChild(span);
  } else {
    select('.error-span').textContent = msg;
  }
};

const usrRegex = new RegExp('^[a-zA-Z0-9_-]{5,15}$');
const emailRegex = new RegExp('^([A-Za-z_0-9?]\.?){3,32}@([A-Za-z0-9]{3,32})\.([A-Za-z0-9s]){2,5}');

const validateUsr = usr => usrRegex.test(usr) && usr.length >= 5;
const validatePwd = (pwd, pwdConfirmation) => pwd === pwdConfirmation && pwd.length >= 8;
const validateEmail = email => emailRegex.test(email);

const signUp = () => {
  const signUpData = {
    username: select('#usr').value,
    email: select('#email').value,
    pwd: select('#pwd').value,
    pwdConfirmation: select('#pwd-confirmation').value,
  };
  const {
    username, email, pwd, pwdConfirmation,
  } = signUpData;

  const isValidUsr = validateUsr(username);
  const isValidPwd = validatePwd(pwd, pwdConfirmation);
  const isValidEmail = validateEmail(email);

  if (!isValidUsr) {
    return errSpan('Username must be at least 5 characters, contains only alphanumericals.');
  } else if (!isValidEmail) {
    return errSpan('Please Enter A Correct Email Address!');
  } else if (!isValidPwd) {
    return errSpan('Passwords must match.');
  }

  const headers = {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(signUpData),
  };

  fetch('/signup', headers)
    .then(res => res.json())
    .then(res => errSpan(res.msg))
    .catch(err => errSpan(err.msg));
  return null;
};

select('#submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  signUp();
});
