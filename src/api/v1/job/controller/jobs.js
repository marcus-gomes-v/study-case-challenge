const express = require('express');

const getProfile = require('../../../../middleware/get-profile');
const { pay, listActiveJobs } = require('../entity/job');

const jobs = express.Router();

const getModels = (req) => req.app.get('models');

const sendResponse = (res, data) => res.status(200).json(data);

jobs
  .get('/jobs/unpaid', getProfile, async (req, res, next) => {
    try {
      const { profile } = req
      const { Job, Contract } = getModels(req)
      const response = await listActiveJobs(profile, Job, Contract)
      sendResponse(res, response)
    } catch (error) {
      next(error)
    }
  })
  .post('/jobs/:job_id/pay', getProfile, async (req, res, next) => {
    try {
      const sequelize = req.app.get('sequelize')
      const { profile, params } = req
      const models = getModels(req)
      const response = await pay(sequelize, profile, params, models)
      sendResponse(res, response);
    } catch (error) {
      next(error);
    }
  });

module.exports = jobs

module.exports.test = {
  sendResponse
}