const { listInProgressJobs } = require("../../repository");
const { hasJobs } = require("../../validator");

const listActiveJobs = async (profile, { Job, Contract }) => {
  const listOfInProgressJobs = await listInProgressJobs(profile, Job, Contract)
  const listOfActiveJobs = hasJobs(listOfInProgressJobs)
  return listOfActiveJobs
}

module.exports = listActiveJobs
