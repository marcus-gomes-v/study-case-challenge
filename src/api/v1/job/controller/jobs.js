const express = require('express');

const getProfile = require('../../../../middleware/get-profile');
const { pay, get } = require('../entity/job');

const jobs = express.Router();

jobs
  .get('/jobs/unpaid', getProfile, get)
  .post('/jobs/:job_id/pay', getProfile, pay);

module.exports = jobs;