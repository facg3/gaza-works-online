const { selectCategories } = require('../database/queries/queries');

exports.get = (req, res) => {
  selectCategories((err, result) => {
    if (err) {
      return next(err);
    }
    // adding property catLink for each category object
    result.forEach((cat) => {
      cat.catLink = `/categories/${cat.category.toLowerCase().replace(/ /g, '-')}`;
    });

    return res.render('categories', {
      title: 'Categories', style: 'categories', category: result, logged: req.logged,
    });
  });
};
