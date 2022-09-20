const { Op } = require('sequelize');

const findContract = async (params, profile, Contract) => {
  try{
    const contract = await Contract.findOne({
      where: {
        id: params.id,
        [Op.or]: [
          { ContractorId: profile.id },
          { ClientId: profile.id },
        ],
      },
    });
    return contract
  } catch(error){
    throw(error)
  }

}
exports.findContract = findContract;

module.exports.test = {
  findContract
};
