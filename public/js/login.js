function hideLogin() {
  const form = document.getElementById('log1');
  form.style.height = '100px';
  form.style.width = '100px';
  form.style.opacity = 0;
  form.style.visibility = 'hidden';
}

function showLogin() {
  const form = document.getElementById('log1');
  form.style.height = '55%';
  form.style.width = '50%';
  form.style.opacity = 1;
  form.style.visibility = 'visible';
}

function showIncorrectLogin() {
  document.getElementsByClassName('invalid-login')[0].classList.add('active');
}

function hideIncorrectLogin() {
  document.getElementsByClassName('invalid-login')[0].classList.remove('active');
}

document.getElementById('logmein').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const usernameRegex = /^\w{5,}/;
  const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
  if (username && password) {
    if (passwordRegex.test(password) && usernameRegex.test(username)) {
      const body = {
        username,
        password,
      };
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
        .then(res => res.json())
        .catch((err) => {
          showIncorrectLogin();
        });
      return;
    }
  }
  const body = {
    username,
    password,
  };
  const headers = {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  };
  fetch('/login', headers)
    .then(res => res.json())
    .catch(err => err);
});
