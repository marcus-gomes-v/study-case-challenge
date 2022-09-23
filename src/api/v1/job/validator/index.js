const hasJobs = require('./has-jobs')
const hasFounds = require('./has-founds')
const jobExists = require('./job-exists')
const jobIsPaid = require('./job-is-paid')
const transactionProcessing = require('./transaction-not-processed')

module.exports = {
    hasJobs,
    hasFounds,
    jobExists,
    jobIsPaid,
    transactionProcessing
}