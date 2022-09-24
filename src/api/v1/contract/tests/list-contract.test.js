const test = require('ava')
const sinon = require('sinon')
const { Op } = require('sequelize');
const { oContractStatus } = require('../../../../shared')
const listContractMock = require('./mocks/list-contract.mock')

const {
  listInProgressContracts,
} = require('../repository/list/list-in-progress-contracts').test

test('#listInProgressContracts() - Success retrieve a list of contract data', async (t) => {
  const findAllStub = sinon.stub().returns(listContractMock)
  const Contract = {
    findAll: findAllStub,
  }
  const profile = {
    id: 4,
  }
  const actual = await listInProgressContracts(profile, Contract)
  const actualOptions = findAllStub.getCall(0).args[0]
  const expectedOptions = {
    where: {
      status: oContractStatus.IN_PROGRESS,
      [Op.or]: [
        { ContractorId: 4 },
        { ClientId: 4 },
      ],
    },
  }
  t.deepEqual(actualOptions, expectedOptions, 'Should call listInProgressContracts with expected options')
  t.deepEqual(actual, listContractMock, 'Should return a contract object')
})
