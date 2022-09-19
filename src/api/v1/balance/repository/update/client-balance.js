const balanceErrors = require('../../error')
const ErrorInvalidAmount = balanceErrors('InvalidAmount')
const { throwCustomError } = require("../../../../../errors");

const updateClientBalance = async (id, amount, Profile) => {
  try{
    const result = await Profile.increment(
      { balance: amount },
      { where: { id: id } }
    )
    return result
  } catch(error){
    throwCustomError(ErrorInvalidAmount)
  }
}

module.exports = updateClientBalance
