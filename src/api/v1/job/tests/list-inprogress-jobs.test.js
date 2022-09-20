const test = require('ava')
const sinon = require('sinon')
const { Op } = require('sequelize');
const listInProgressJobsMock = require('./mocks/list-inprogress-jobs.mock')

const {
  listJobs,
} = require('../repository/list').test

test('#listJobs() - Success retrieve a list of contract data', async (t) => {
  const findAllStub = sinon.stub().returns(listInProgressJobsMock)
  const Contract = {
    findAll: findAllStub,
  }
  const Job = {
    findAll: findAllStub,
  }
  const profile = {
    id: 2,
  }
  const actual = await listJobs(profile, Job, Contract)
  const actualOptions = findAllStub.getCall(0).args[0]
  const expectedOptions = {
    where: {
      paid: {
        [Op.is]: null,
      },
    },
    include: [{
      model: Contract,
      where: {
        status: 'in_progress',
        [Op.or]: [
          { ContractorId: 2 },
          { ClientId: 2 },
        ],
      },
    }],
    order: [
      ['ContractId', 'DESC'],
    ],
  }
  t.deepEqual(actualOptions, expectedOptions, 'Should call listJobs with expected options')
  t.deepEqual(actual, listInProgressJobsMock, 'Should return a contract object')
})