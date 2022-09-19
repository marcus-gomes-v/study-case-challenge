const { findJob } = require('../../repository');
const { hasFounds } = require("../../validator");
const { findContractor } = require("../../repository");
const { exists, paid } = require("../../validator");
const { updateBalances } = require('../../repository');

const getModels = (req) => req.app.get('models');

const sendResponse = (res, id, price) => res.status(200).json({ message: `Payment for job ${id} was successfully completed, Amount: ${(+price).toLocaleString("en-US", { style: "currency", currency: "USD" })}`});

const pay = async (req, res, next) => {
  try {
    const { profile, params } = req
    const { Profile, Job, Contract } = getModels(req)
     
    const result = await findJob(profile, params, Job, Contract)
    const job = exists(result)
    paid(job)

    const contractor = await findContractor(job.Contract.ContractorId, Profile)
    hasFounds(profile, job)

    await updateBalances(profile, contractor, job, Profile, Job)
    const { id, price } = job
    sendResponse(res, id, price);
  } catch (error) {
    next(error);
  }
};

module.exports = pay;
