const path = require('path');
const { viewProject } = require('../database/queries/queries');

exports.get = (req, res, next) => {
  const singleProjectArr = req.params.singleProject.split('-');
  const projectId = singleProjectArr[singleProjectArr.length - 1];
  viewProject(projectId, (err, result) => {
    if (err) {
      return next(new Error('Internal Server Error: viewProject'));
    } else if (result.rowCount !== 1) {
      return res.status(400).send({
        msg: 'Bad Request: viewProject',
      });
    }
    const { singleCategory } = req.params;
    const category = singleCategory.replace(/-/g, ' ');
    return res.render('viewProject', {
      title: `${result.rows[0].title}`,
      style: 'viewProject',
      category,
      projectDetails: result.rows[0],
      logged: req.logged
    });
  });
};
