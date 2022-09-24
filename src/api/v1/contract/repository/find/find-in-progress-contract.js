const { Op } = require('sequelize');

const findInProgressContract = async (params, profile, Contract) => {
  try{
    const inProgressContract = await Contract.findOne({
      where: {
        id: params.id,
        [Op.or]: [
          { ContractorId: profile.id },
          { ClientId: profile.id },
        ],
      },
    });
    return inProgressContract
  } catch(error){
    throw(error)
  }

}
module.exports = findInProgressContract;

module.exports.test = {
  findInProgressContract
};
