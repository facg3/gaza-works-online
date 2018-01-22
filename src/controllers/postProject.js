const postProjectQuery = require('../database/queries/queries');

const getPostProject = (req, res) => {
  res.render('postProject', {
    title: 'Post A Project',
    style: 'postProject',
  });
};

const postProject = (req, res) => {
  console.log(req.body);
  postProjectQuery.postProject(req.body, (err, response) => {
    if (err) {
      res.render('register', {
        error: true,
        mssg: 'Sth went wrong',
        layout: false,
      });
    } else {
      res.redirect('/categories');
    }
  });
  res.send({});
};
module.exports = {
  postProject,
  getPostProject,
};
