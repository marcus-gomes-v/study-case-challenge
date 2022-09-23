const canDeposit = require('./can-deposit')
const clientExists = require('./client-exists')
const isNumber = require('./is-number')
const isPositive = require('./is-positive')

module.exports = {
    ...canDeposit,
    ...clientExists,
    ...isNumber,
    ...isPositive
}