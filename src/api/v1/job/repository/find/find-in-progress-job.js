const { throwCustomError } = require('../../../../../errors')
const { oContractStatus } = require('../../../../../shared')
const { jobExists, jobIsPaid } = require('../../validator')
const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS

const findInProgressJob = async (profile, params, Job, Contract) => {
    try{
        const inProgressJob = await Job.findOne(
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
        jobExists(inProgressJob) && jobIsPaid(inProgressJob)
        return inProgressJob
    } catch(error){
        throwCustomError(error)
    }
}

module.exports = findInProgressJob

module.exports.test = {
    findInProgressJob
}
