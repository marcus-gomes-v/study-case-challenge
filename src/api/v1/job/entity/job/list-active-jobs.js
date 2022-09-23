const { listJobs } = require("../../repository");
const { hasJobs } = require("../../validator");

const listActiveJobs = async (profile, Job, Contract) => {
  const result = await listJobs(profile, Job, Contract)
  const activeJobs = hasJobs(result)
  return activeJobs
}

module.exports = listActiveJobs