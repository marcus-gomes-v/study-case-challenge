
const { findInProgressJob, updateJob, incrementProfileBalance, decreaseProfileBalance } = require('../../repository')
const { hasFounds } = require('../../validator')

const payActiveJob = async (sequelize, profile, params, { Profile, Job, Contract }) => {

  const inProgressJob = await findInProgressJob(profile, params, Job, Contract)
  hasFounds(profile, inProgressJob)

  const transaction = await sequelize.transaction()
  await Promise.all([
    updateJob(inProgressJob, transaction, Job),
    incrementProfileBalance(inProgressJob, transaction, Profile),
    decreaseProfileBalance(inProgressJob, transaction, Profile),
  ])
  await transaction.commit()

  const { id, price } = inProgressJob
  return { message: `Payment for job ${id} was successfully completed, Amount: ${(+price).toLocaleString("en-US", { style: "currency", currency: "USD" })}` }
}

module.exports = payActiveJob
