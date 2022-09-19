const { Op } = require('sequelize');
const { oContractStatus } = require('../../../../shared')

const findContracts = (profile, Contract) => Contract.findAll({
  where: {
    status: oContractStatus.IN_PROGRESS,
    [Op.or]: [
      { ContractorId: profile.id },
      { ClientId: profile.id },
    ],
  },
});

exports.findContracts = findContracts;