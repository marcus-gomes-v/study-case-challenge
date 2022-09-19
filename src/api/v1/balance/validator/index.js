const canDeposit = require('./can-deposit')
const clientExists = require('./client-exists')


module.exports = {
    ...canDeposit,
    ...clientExists
}