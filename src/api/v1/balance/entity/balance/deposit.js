
const { depositIsANumber, isPositive } = require('../../validator');
const { updateClientBalance, sumActiveJobs, findClient } = require("../../repository");

const getModels = (req) => req.app.get('models');

const sendResponse = (res) => res.status(200).json({ message: 'The deposit was made' });

const deposit = async (req, res, next) => {
  try {
    const { profile } = req;
    const { amount } = req.body
    const { Profile, Job, Contract } = getModels(req)

    depositIsANumber(amount) && isPositive(amount)

    const sequelize = req.app.get('sequelize')
    const transaction = await sequelize.transaction() 
    await Promise.all([
      findClient(profile.id, Profile, transaction),
      sumActiveJobs(amount, profile.id, Job, Contract, transaction),
      updateClientBalance(profile.id, amount, Profile, transaction),
    ])
    await transaction.commit()

    sendResponse(res)
  } catch (error) {
    next(error)
  }
};

module.exports = deposit

module.exports.test = {
  sendResponse
}