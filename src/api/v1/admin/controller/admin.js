const express = require('express')
const { getStartDate, getEndDate } = require('../helper/getDates');
const { bestProfessionMiddleware, bestClientsMiddleware } = require('../middleware')
const { getBestProfession, listBestClients } = require('../entity/admin')


const admin = express.Router()

const sendResponse = (res, data) => res.status(200).json(data);

admin
  .get('/admin/best-profession', bestProfessionMiddleware, async (req, res, next) => {
    try {
      const startDate = getStartDate(req.query);
      const endDate = getEndDate(req.query);
      const summaryByProfession = await getBestProfession(startDate, endDate)
      sendResponse(res, summaryByProfession);
    } catch (error) {
      next(error);
    }
  })
  .get('/admin/best-clients', bestClientsMiddleware, async (req, res, next) => {
    try {
      const startDate = getStartDate(req.query);
      const endDate = getEndDate(req.query);
      const { limit } = req.query;
      const summaryBestClients = await listBestClients(startDate, endDate, limit);
      sendResponse(res, summaryBestClients);
    } catch (error) {
      next(error);
    }
  })

module.exports = admin

module.exports.test = {
  sendResponse
}