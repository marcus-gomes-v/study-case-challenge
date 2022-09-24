const balanceErrors = require('../../error')
const ErrorProblemToProcess = balanceErrors('ProblemToProcess')
const { throwCustomError } = require("../../../../../errors");

const updateClientBalance = async (id, amount, Profile, transaction) => {
  try{
    const updatedClientBalance = await Profile.increment(
      { balance: amount },
      { where: { id: id } },
      { transaction }
    )
    return updatedClientBalance
  } catch(error){
    throwCustomError(ErrorProblemToProcess)
  }
}

module.exports = updateClientBalance

module.exports.test = {
  updateClientBalance
}
