const { selectCategories } = require('../database/queries/queries');

exports.get = (req, res) => {
  selectCategories((err, result) => {
    res.render('categories', { title: 'Categories', style: 'categories', category: result });
  });
};
