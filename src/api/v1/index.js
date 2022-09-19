const express = require('express')

const contract = require('./contract')
const job = require('./job')
const balance = require('./balance')

const routes = express.Router()

routes.use(contract)
routes.use(job)
routes.use(balance)

module.exports = routes
