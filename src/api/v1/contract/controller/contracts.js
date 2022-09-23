const express = require('express');

const getProfile = require('../../../../middleware/get-profile');
const { get, list } = require('../entity/contract');

const contracts = express.Router()

const getModels = (req) => req.app.get('models')

const sendResponse = (res, data) => res.status(200).json(data)

contracts
  .get('/contracts', getProfile, async (req, res, next) => {
    try {
      const { Contract } = getModels(req)
      const { profile } = req
      const contracts = await list(profile, Contract)
      sendResponse(res, contracts)
    } catch (error) {
      next(error);
    }
  })
  .get('/contracts/:id', getProfile, async (req, res, next) => {
    try {
      const { Contract } = getModels(req)
      const { params, profile } = req
      const contract = await get(params, profile, Contract)
      sendResponse(res, contract)
    } catch (error) {
      next(error)
    }
  })

module.exports = contracts

module.exports.test = {
  sendResponse
}