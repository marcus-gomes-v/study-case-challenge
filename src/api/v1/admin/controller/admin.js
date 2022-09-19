const express = require('express')
const { bestProfessionMiddleware, bestClientsMiddleware } = require('../middleware')
const { getBestProfession, listBestClients } = require('../entity/admin')


const admin = express.Router()

admin
  .get('/admin/best-profession', bestProfessionMiddleware, getBestProfession)
  .get('/admin/best-clients', bestClientsMiddleware, listBestClients)

module.exports = admin