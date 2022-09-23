
const { findJob, updateJob, incrementProfileBalance, decreaseProfileBalance } = require('../../repository')
const { hasFounds } = require('../../validator')

const payActiveJob = async (sequelize, profile, params, { Profile, Job, Contract }) => {

  const job = await findJob(profile, params, Job, Contract)
  hasFounds(profile, job)

  const transaction = await sequelize.transaction()
  await Promise.all([
    updateJob(job, transaction, Job),
    incrementProfileBalance(job, transaction, Profile),
    decreaseProfileBalance(job, transaction, Profile),
  ])
  await transaction.commit()

  const { id, price } = job
  return { message: `Payment for job ${id} was successfully completed, Amount: ${(+price).toLocaleString("en-US", { style: "currency", currency: "USD" })}` }
}

module.exports = payActiveJob
