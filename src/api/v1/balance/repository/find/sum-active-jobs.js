const { Op, Sequelize } = require('sequelize')
const balanceErrors = require('../../error')
const ErrorProblemToProcess = balanceErrors('ProblemToProcess')
const { throwCustomError } = require('../../../../../errors')
const { oContractStatus } = require('../../../../../shared')

const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS

const sumActiveJobs = async (client, Job, Contract) => {
  try{
    const sumActiveJobs = Job.findOne({
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
          ClientId: client.id,
        },
      }],
    });
    return sumActiveJobs
  } catch(error){
    throwCustomError(ErrorProblemToProcess)
  }
}

module.exports = sumActiveJobs;
