const { Op } = require('sequelize');

const findContract = (params, profile, Contract) => Contract.findOne({
  where: {
    id: params.id,
    [Op.or]: [
      { ContractorId: profile.id },
      { ClientId: profile.id },
    ],
  },
});
exports.findContract = findContract;
