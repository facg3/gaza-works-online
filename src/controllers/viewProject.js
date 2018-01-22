const { viewProject } = require('../database/queries/queries');

exports.get = (req, res) => {
  viewProject((err, result) => {
    res.render('viewProject', { title: 'Project', style: 'singleCategory', projects: result });
  });
};
