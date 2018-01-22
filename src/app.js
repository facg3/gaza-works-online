const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const controllers = require('./controllers/mainController');

const app = express();

app.set('port', process.env.PORT || 4001);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(favicon(path.join(__dirname, '..', 'public', 'img', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({ type: () => true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));

app.use(controllers);

module.exports = app;
