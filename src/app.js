const express = require('express');
const path = require('path');
const routes = require('./controllers/mainController');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 4001);
app.use(routes);

module.exports = app;
