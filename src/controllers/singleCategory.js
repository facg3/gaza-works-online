const { selectCatProjects } = require('../database/queries/queries');

exports.get = (req, res) => {
  selectCatProjects((err, result) => {
    res.render('singleCategory', { title: 'Single Category', style: 'singleCategory', projects: result });
  });
};
