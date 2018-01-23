const { viewProject } = require('../database/queries/queries');

exports.get = (req, res) => {
  const projectId = req.params.singleProject.split('-')[req.params.singleProject.split('-').length - 1];
  viewProject(projectId, (err, result) => {
    if (err) {
      return res.status(500).send({
        msg: 'Internal Server Error: viewProject',
        err,
      });
    } else if (result.rowCount !== 1) {
      return res.status(400).send({
        msg: 'Bad Request: viewProject',
      });
    }
    // toDo
    const category = req.params.singleCategory.replace(/-/g, ' ');
    return res.render('viewProject', { style: 'viewProject', category, projectDetails: result.rows[0] });
  });
};
