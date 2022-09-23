const { throwCustomError } = require('../../../../../errors')
const { oContractStatus } = require('../../../../../shared')
const { jobExists, jobIsPaid } = require('../../validator')
const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS

const findJob = async (profile, params, Job, Contract) => {
    try{
        const job = await Job.findOne(
            {
                where: {
                    id: params.job_id,
                },
                include: [{
                    model: Contract,
                    where: {
                        status: IN_PROGRESS_STATUS,
                        ClientId: profile.id,
                    },
                }],
            }
        );
        jobExists(job) && jobIsPaid(job)
        return job
    } catch(error){
        throwCustomError(error)
    }
}

module.exports = findJob

module.exports.test = {
    findJob
}
