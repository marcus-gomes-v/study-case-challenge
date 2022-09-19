const express = require('express');

const getProfile = require('../../../../middleware/get-profile');
const { get, list } = require('../entity/contract');

const contracts = express.Router();

contracts
  .get('/contracts', getProfile, list)
  .get('/contracts/:id', getProfile, get);

module.exports = contracts;