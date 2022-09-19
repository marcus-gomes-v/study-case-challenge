const { throwCustomError } = require('../../../../errors');
const jobsErrors = require('../error');
const NoSufficientFundsError = jobsErrors('NoSufficientFunds');

const hasFounds = (profile, job) => {
    profile.balance >= job.price ? 
        profile.balance : 
        throwCustomError(NoSufficientFundsError)
};

exports.hasFounds = hasFounds;