const { throwCustomError } = require("../../../../../errors")
const transactionProcessing = require("../../validator/transaction-not-processed")

const incrementProfileBalance = async (job, transaction, Profile) => {
   try{
       const incrementedBalance = await Profile.increment(
        'balance', 
        { 
            by: job.price, 
            where: { id: job.Contract.ContractorId }, 
            transaction 
        })
       transactionProcessing(incrementedBalance)
       return incrementedBalance
   } catch(error){
    throwCustomError(error)
   }
}

module.exports = incrementProfileBalance