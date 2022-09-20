const { Op } = require('sequelize');
const { oContractStatus } = require('../../../../shared')

const listContracts = async (profile, Contract) => {
  try{
    const contractList = Contract.findAll({
      where: {
        status: oContractStatus.IN_PROGRESS,
        [Op.or]: [
          { ContractorId: profile.id },
          { ClientId: profile.id },
        ],
      },
    });
    return contractList
  } catch(error){
    throw(error)
  }
}

module.exports = listContracts;

module.exports.test = {
  listContracts
}