const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const controllers = require('./controllers/mainController');
const tokenValidator = require('./libs/tokenValidator');
const loginChecker = require('./libs/loginChecker');
const { Error500ServerError } = require('./controllers/errors');


const app = express();

app.set('port', process.env.PORT || 4001);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(favicon(path.join(__dirname, '..', 'public', 'img', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({ type: () => true }));
app.use(cookieParser());
app.use(tokenValidator);
app.use(loginChecker);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main'
}));
app.use(controllers);
app.use(Error500ServerError);

module.exports = app;
