const express = require('express');
const { depositMiddleware } = require('../middleware')
const { deposit } = require('../entity/balance');

const balances = express.Router();

balances
  .post('/balances/deposit', depositMiddleware, deposit);

module.exports = balances;
