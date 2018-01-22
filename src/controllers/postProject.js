const postProjectQuery = require('../database/queries/queries');

exports.get = (req, res) => {
  res.render('postProject', {
    title: 'Post A Project',
    style: 'postProject',
  });
};

// ToDo , Still
exports.post = (req, res) => {
  console.log(req.body);
  postProjectQuery.postProject(req.body, (err, response) => {
    if (err) {
      return res.status(500);
    }
    return res.send({});
  });
};
