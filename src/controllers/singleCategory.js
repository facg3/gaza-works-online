const { selectCatProjects } = require('../database/queries/queries');

// toDo Still
exports.get = (req, res, next) => {
  const reqCategory = req.params.singleCategory.replace(/-/g, ' ');
  selectCatProjects(reqCategory, (err, result) => {
    if (err) {
      return next(err);
    }
    return res.render('singleCategory', {
      project: result, reqCategory, style: 'singleCategory',
    });
  });
};
