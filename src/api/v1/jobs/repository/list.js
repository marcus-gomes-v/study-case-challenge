const { Op } = require('sequelize');
const { oContractStatus } = require('../../../../shared')
const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS;

const listJobs = (profile, Job, Contract) => Job.findAll({
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

module.exports = {
  listJobs
};
