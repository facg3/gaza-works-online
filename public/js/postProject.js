const select = sth => document.querySelector(sth);

select('.submit').addEventListener('click', (e) => {
  e.preventDefault();
  const title = select('.query.title input').value;
  const deadline = select('.query.deadline input').value;
  const lifetime = select('.query.lifetime input').value;
  const categories = select('.query.categories input').value;
  const budget = select('.query.budget input').value;
  const description = select('.query.description textarea').value;
  const body = {
    title,
    deadline,
    lifetime,
    categories,
    budget,
    description
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
    .then(res => console.log(res))
    .catch(err => console.log(err))
});
