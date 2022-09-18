const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const { sequelize } = require('../models');
const { expressErrorHandler } = require('../errors');
const api = require('../api/v1');
const app = express();

app.use(bodyParser.json());
app.use(expressValidator());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);
app.use('/api/v1', api);

app.get('/', (_,res) => res.status(200).send('Greetings - Deel Task API'));

expressErrorHandler(app);

module.exports = app;
