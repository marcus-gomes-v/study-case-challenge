const getBestClients = require('./clients')
const getBestProfession = require('./profession')

module.exports = {
    ...getBestClients,
    ...getBestProfession
}