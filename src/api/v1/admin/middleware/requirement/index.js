const bestProfessionRequirement = require('./get-best-profession')
const bestClientsRequirement = require('./list-best-clients')
const { request } = require('../../../../../validator');

module.exports = {
    bestProfessionMiddleware: [
        bestProfessionRequirement,
        request,
    ],
    bestClientsMiddleware: [
        bestClientsRequirement,
        request,
    ]
}