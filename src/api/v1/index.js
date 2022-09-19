const express = require('express')

const contract = require('./contract')
const job = require('./job')
const balance = require('./balance')
const admin = require('./admin')

const routes = express.Router()

routes.use(contract)
routes.use(job)
routes.use(balance)
routes.use(admin)

module.exports = routes
