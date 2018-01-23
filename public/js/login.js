function hideLogin() {
  const form = document.getElementById('log1');
  form.style.height = '0px';
  form.style.width = '0px';
  form.style.opacity = 0;
  form.style.visibility = 'hidden';
}

function showLogin() {
  const form = document.getElementById('log1');
  form.style.height = 'auto';
  form.style.width = '50%';
  form.style.opacity = 1;
  form.style.visibility = 'visible';
}

const showIncorrectLogin = () => {
  document.getElementsByClassName('invalid-login')[0].classList.add('active');
}

const hideIncorrectLogin = () => {
  document.getElementsByClassName('invalid-login')[0].classList.remove('active');
}

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
document.getElementById('logmein').addEventListener('click', (e) => {
  e.preventDefault();
  const usernameRegex = /^\w{5,}/;
  const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

  if (username && password) {
    if (passwordRegex.test(password) && usernameRegex.test(username)) {
      const body = { username, password };
      const headers = {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(body),
      };
      fetch('/login', headers)
        .then((res) => {
          res.json();
        })
        .then((res) => {
          if (document.cookie.includes('logged_in=true')) {
            window.location = '/';
          }
        })
        .catch((err) => {
          console.log(err);
          showIncorrectLogin();
        });
    }
  }
});
