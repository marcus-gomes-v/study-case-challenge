const jobsErrors = require('../error');
const { throwCustomError } = require('../../../../errors');
const JobNotFoundError = jobsErrors('JobNotFound');

const exists = (result) => !result ? throwCustomError(JobNotFoundError) : result;

exports.exists = exists;
