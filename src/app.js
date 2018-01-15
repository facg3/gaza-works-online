const express = require('express');
const path = require('path');
const routes = require('./controllers/mainController');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main'
}));
app.set('port', process.env.PORT || 4001);
app.use(routes);

module.exports = app;
