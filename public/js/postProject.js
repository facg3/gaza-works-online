const select = sth => document.querySelector(sth);

select('.submit').addEventListener('click', (e) => {
  e.preventDefault();
  const title = select('#title input').value;
  const deadline = select('#deadline input').value;
  const lifetime = select('#lifetime input').value;
  const categories = select('#categories input').value;
  const budget = select('#budget input').value;
  const description = select('#description textarea').value;
  const body = {
    title,
    deadline,
    lifetime,
    categories,
    budget,
    description,
  };
  console.log(body);
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
    .catch(err => console.log(err));
});
