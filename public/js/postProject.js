const select = sth => document.querySelector(sth);

select('.submit').addEventListener('click', (e) => {
  e.preventDefault();
  const body = {
    title: select('#title input').value,
    deadline: select('#deadline input').value,
    lifetime: select('#lifetime input').value,
    categories: select('#categories select').value,
    budget: select('#budget input').value,
    description: select('#description textarea').value,
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
  fetch('/postProject', headers)
    .then(res => res.json)
    .then((res) => {
      if (res.msg === 'ProjectSubmittedSuccessfully') {
        console.log(res.msg);
        // window.location.pathname = '/categories';
      }
      return alert(res.msg);
    })
    .catch(err => alert(err));
});
