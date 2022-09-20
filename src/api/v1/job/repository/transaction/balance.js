const jobsErrors = require('../../error')
const ErrorProcessingTransaction = jobsErrors('ErrorProcessingTransaction')
const { throwCustomError } = require('../../../../../errors')
const { sequelize } = require('../../../../../models');

const updateBalances = async ( client, contractor, job, Profile, Job ) => {
  try {
    const newClientBalance = client.balance - job.price
    const newContractorBalance = contractor.balance + job.price

    await sequelize.transaction(async (t) => {
      await Profile.update({
        balance: newClientBalance
      }, {
        where: {
          id: client.id
        },
        transaction: t 
      });
      await Profile.update({
        balance: newContractorBalance
      }, {
        where: {
          id: contractor.id
        },
        transaction: t
      });
      await Job.update({
        paid: 1,
        paymentDate: new Date(),
      }, {
        where: {
          id: job.id
        },
        transaction: t
      });
    });
    return true
  } catch (error) {
    throwCustomError(ErrorProcessingTransaction)
  }
};

module.exports = updateBalances;
