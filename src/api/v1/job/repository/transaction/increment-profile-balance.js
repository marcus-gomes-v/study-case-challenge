const { throwCustomError } = require("../../../../../errors")
const transactionProcessing = require("../../validator/transaction-not-processed")

const incrementProfileBalance = async (job, transaction, Profile) => {
   try{
       const incrementedProfileBalance = await Profile.increment(
        'balance',
        {
            by: job.price,
            where: { id: job.Contract.ContractorId },
            transaction
        })
       transactionProcessing(incrementedProfileBalance)
       return incrementedProfileBalance
   } catch(error){
    throwCustomError(error)
   }
}

module.exports = incrementProfileBalance
