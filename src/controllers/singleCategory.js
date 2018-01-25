const { selectCatProjects } = require('../database/queries/queries');


exports.get = (req, res, next) => {
  const { singleCategory } = req.params;
  const reqCategory = singleCategory.replace(/-/g, ' ');
  selectCatProjects(reqCategory, (err, result) => {
    if (err) {
      return next(err);
    }
    const projects = result.map((project) => {
      const newProject = project;
      newProject.link = `${singleCategory}/${project.title}-${project.id}`.replace(/ /g, '-').toLowerCase();
      return newProject;
    });
    return res.render('singleCategory', {
      projects, reqCategory, style: 'singleCategory', title: reqCategory.toUpperCase(), logged: req.logged,
    });
  });
};
