
const { throwCustomError } = require('../../../../../errors');
const { depositIsANumber, isPositive } = require('../../validator');
const { updateClientBalance, sumActiveJobs, findClient } = require("../../repository");

const deposit = async (sequelize, profile, amount, { Profile, Job, Contract }) => {
  depositIsANumber(amount) && isPositive(amount)
  const transaction = await sequelize.transaction() 
  await Promise.all([
    findClient(profile.id, Profile, transaction),
    sumActiveJobs(amount, profile.id, Job, Contract, transaction),
    updateClientBalance(profile.id, amount, Profile, transaction),
  ])
  await transaction.commit()
};

module.exports = deposit
