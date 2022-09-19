const hasJobs = require('./has-jobs')
const hasFounds = require('./has-founds')
const exists = require('./exists')
const paid = require('./paid')

module.exports = {
    ...hasJobs,
    ...hasFounds,
    ...exists,
    ...paid
}