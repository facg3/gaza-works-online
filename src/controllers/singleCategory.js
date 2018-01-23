const { selectCatProjects } = require('../database/queries/queries');

// toDo Still
exports.get = (req, res) => {
  const reqCategory = req.params.singleCategory.replace(/-/g, ' ');
  selectCatProjects(reqCategory, (err, result) => {
    res.render('singleCategory', {
      project: result, reqCategory, style: 'singleCategory',
    });
  });
};
