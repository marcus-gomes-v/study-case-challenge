const { throwCustomError } = require("../../../../../errors")
const transactionProcessing = require("../../validator/transaction-not-processed")

const updateJob = async (job, transaction, Job) => {
   try{
       const updatedJob = await Job.update({
           paid: true,
           paymentDate: new Date()
       }, {
           where: { id: job.id },
           transaction
       })
       transactionProcessing(updatedJob)
       return updatedJob
   } catch(error){
    throwCustomError(error)
   }
}

module.exports = updateJob