const balanceErrors = require('../../error')
const ErrorProblemToProcess = balanceErrors('ProblemToProcess')
const { throwCustomError } = require("../../../../../errors");

const updateClientBalance = async (id, amount, Profile, transaction) => {
  try{
    const result = await Profile.increment(
      { balance: amount },
      { where: { id: id } },
      { transaction }
    )
    return result
  } catch(error){
    throwCustomError(ErrorProblemToProcess)
  }
}

module.exports = updateClientBalance

module.exports.test = {
  updateClientBalance
}
