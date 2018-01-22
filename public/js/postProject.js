document.getElementById('postProject').addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const skills = document.getElementById('skills').value;
  const budget = document.getElementById('budget').value;
  const liftime = document.getElementById('duration').value;
  const deadLine = document.getElementById('deadLine').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  // const titleReg = / /;
  // const skillsReg = / /;
  // const categoryReg = / /;
  if (title && skills && budget &&
    liftime && deadLine && category && description) {
    // if (titleReg.test(title) &&
    //   skillsReg.test(skills) &&
    //   categoryReg.test(category)) {
    const body = {
      title,
      skills,
      budget,
      liftime,
      deadLine,
      category,
      description
    };
    const headers = {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    };
    fetch('/postProject', headers)
      .then(res => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
});
