const { Op } = require('sequelize');
const { oContractStatus } = require('../../../../shared')
const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS;

const listJobs = async (profile, Job, Contract) => {
  try{
    const jobsInProgress = await Job.findAll({
      where: {
        paid: {
          [Op.is]: null,
        },
      },
      include: [{
        model: Contract,
        where: {
          status: IN_PROGRESS_STATUS,
          [Op.or]: [
            { ContractorId: profile.id },
            { ClientId: profile.id },
          ],
        },
      }],
      order: [
        ['ContractId', 'DESC'],
      ],
    });

    return jobsInProgress
  } catch(error){
    throw(error)
  }
}

module.exports = {
  listJobs
};

module.exports.test = {
  listJobs
}
