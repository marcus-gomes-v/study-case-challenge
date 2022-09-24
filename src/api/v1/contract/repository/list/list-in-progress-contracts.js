const { Op } = require('sequelize');
const { oContractStatus } = require('../../../../../shared')

const listInProgressContracts = async (profile, Contract) => {
  try{
    const listOfInProgressContracts = Contract.findAll({
      where: {
        status: oContractStatus.IN_PROGRESS,
        [Op.or]: [
          { ContractorId: profile.id },
          { ClientId: profile.id },
        ],
      },
    });
    return listOfInProgressContracts
  } catch(error){
    throw(error)
  }
}

module.exports = listInProgressContracts;

module.exports.test = {
  listInProgressContracts
}
