const test = require('ava')
const sinon = require('sinon')
const { oContractStatus } = require('../../../../shared')
const jobMock = require('./mocks/job.mock')

const {
  findInProgressJob,
} = require('../repository/find/find-in-progress-job').test

test('#findInProgressJob() - Success retrieve a list of contract data', async (t) => {
  const findOneStub = sinon.stub().returns(jobMock)
  const Contract = {
    findOne: findOneStub,
  }

  const Job = {
    findOne: findOneStub,
  }

  const profile = {
    id: 2,
  }

  const params = {
    job_id: 4,
  }

  const actual = await findInProgressJob(profile, params, Job, Contract)
  const actualOptions = findOneStub.getCall(0).args[0]
  const expectedOptions = {
    where: {
      id: 4,
    },
    include: [{
      model: Contract,
      where: {
        status: oContractStatus.IN_PROGRESS,
        ClientId: 2,
      },
    }],
  }
  t.deepEqual(actualOptions, expectedOptions, 'Should call findInProgressJob with expected options')
  t.deepEqual(actual, jobMock, 'Should return a contract object')
})
