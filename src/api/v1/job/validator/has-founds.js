const { throwCustomError } = require('../../../../errors');
const jobsErrors = require('../error');
const NoSufficientFundsError = jobsErrors('NoSufficientFunds');

const hasFounds = (profile, job) => profile.balance < job.price ? throwCustomError(NoSufficientFundsError) : true

module.exports = hasFounds;