const jobsErrors = require('../error');
const { throwCustomError } = require('../../../../errors');
const JobAlreadyPaidError = jobsErrors('JobAlreadyPaid');

const jobIsPaid = (job) => job.paid ? throwCustomError(JobAlreadyPaidError) : job;

module.exports = jobIsPaid;
