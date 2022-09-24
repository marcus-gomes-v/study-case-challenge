const { throwCustomError } = require("../../../../../errors")
const transactionProcessing = require("../../validator/transaction-not-processed")

const decreaseProfileBalance = async (job, transaction, Profile) => {
   try{
       const decreasedProfileBalance = await Profile.decrement(
        'balance',
        {
             by: job.price,
             where: { id: job.Contract.ClientId },
             transaction
        })
       transactionProcessing(decreasedProfileBalance)
       return decreasedProfileBalance
   } catch(error){
    throwCustomError(error)
   }
}

module.exports = decreaseProfileBalance
