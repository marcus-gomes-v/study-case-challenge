const { oContractStatus } = require('../../../../../shared')
const IN_PROGRESS_STATUS = oContractStatus.IN_PROGRESS;

const findJob = (profile, params, Job, Contract) => Job.findOne({
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

module.exports = findJob;
