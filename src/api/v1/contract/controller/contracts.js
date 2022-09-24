const express = require('express');

const getProfile = require('../../../../middleware/get-profile');
const { getActiveContract, listActiveContracts } = require('../entity/contract');

const contracts = express.Router()

const getModels = (req) => req.app.get('models')

const sendResponse = (res, data) => res.status(200).json(data)

contracts
  .get('/contracts/:id', getProfile, async (req, res, next) => {
    try {
      const models = getModels(req)
      const { params, profile } = req
      const response = await getActiveContract(params, profile, models)
      sendResponse(res, response)
    } catch (error) {
      next(error)
    }
  })
  .get('/contracts', getProfile, async (req, res, next) => {
    try {
      const models = getModels(req)
      const { profile } = req
      const response = await listActiveContracts(profile, models)
      sendResponse(res, response)
    } catch (error) {
      next(error);
    }
  })

module.exports = contracts

module.exports.test = {
  sendResponse
}
