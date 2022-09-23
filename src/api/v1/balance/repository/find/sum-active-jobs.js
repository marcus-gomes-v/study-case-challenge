const { Op, Sequelize } = require('sequelize')
const { throwCustomError } = require('../../../../../errors')
const { oContractStatus } = require('../../../../../shared')
const { canDeposit } = require('../../validator');

const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS

const sumActiveJobs = async (amount, ClientId, Job, Contract, transaction) => {
  try{
    const { dataValues: { totalJobAmount } } = await Job.findOne({
        attributes: [
          [Sequelize.fn('sum', Sequelize.col('price')), 'totalJobAmount'],
        ],
        where: {
          paid: {
            [Op.is]: null,
          },
        },
        include: [{
          model: Contract,
          where: {
            status: IN_PROGRESS_STATUS,
            ClientId,
          },
        }],
      },
      { transaction }
    );
    canDeposit(totalJobAmount, amount)
    return totalJobAmount
  } catch(error){
    throwCustomError(error)
  }
}

module.exports = sumActiveJobs;

module.exports.test = {
  sumActiveJobs
}
