const { oContractStatus } = require('../../../../../shared')
const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS;

const findJob = async (profile, params, Job, Contract) => {
    try{
        const job = await Job.findOne({
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
        });
        return job
    } catch(error){
        throw(error)
    }
}

module.exports = findJob;

module.exports.test = {
    findJob
}
