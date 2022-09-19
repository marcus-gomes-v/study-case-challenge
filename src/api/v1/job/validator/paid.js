const jobsErrors = require('../error');
const { throwCustomError } = require('../../../../errors');
const JobAlreadyPaidError = jobsErrors('JobAlreadyPaid');

const paid = (job) => job.paid ? throwCustomError(JobAlreadyPaidError) : job;

exports.paid = paid;
