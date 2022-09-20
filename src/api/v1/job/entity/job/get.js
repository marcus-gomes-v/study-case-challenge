const { listJobs } = require("../../repository");
const { hasJobs } = require("../../validator");

const getModels = (req) => req.app.get('models');

const sendResponse = (res, jobs) => res.status(200).json(jobs);

const getActiveJobs = async (req, res, next) => {
  try {
    const { profile } = req;
    const { Job, Contract } = getModels(req);
    const result = await listJobs(profile, Job, Contract);
    const activeJobs = hasJobs(result);
    sendResponse(res, activeJobs);
  } catch (error) {
    next(error);
  }
};

module.exports = getActiveJobs;

module.exports.test = {
  sendResponse
}