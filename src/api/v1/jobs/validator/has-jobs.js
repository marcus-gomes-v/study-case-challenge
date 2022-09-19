const jobsErrors = require('../error');
const NotActiveJobsFoundError = jobsErrors('NotActiveJobsFound');
const { throwCustomError } = require('../../../../errors');

const hasJobs = (result) => result.length > 0 ? result : throwCustomError(NotActiveJobsFoundError);

exports.hasJobs = hasJobs;
