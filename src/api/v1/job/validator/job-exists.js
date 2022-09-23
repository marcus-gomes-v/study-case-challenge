const jobsErrors = require('../error');
const { throwCustomError } = require('../../../../errors');
const JobNotFoundError = jobsErrors('JobNotFound');

const jobExists = (result) => !result ? throwCustomError(JobNotFoundError) : result;

module.exports = jobExists;
