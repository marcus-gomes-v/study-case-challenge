const test = require('ava')
const sinon = require('sinon')
const { Op } = require('sequelize');
const { oContractStatus } = require('../../../../shared')
const listContractMock = require('./mocks/list-contract.mock')

const {
  listContracts,
} = require('../repository/list-contracts').test

test('#listContracts() - Success retrieve a list of contract data', async (t) => {
  const findAllStub = sinon.stub().returns(listContractMock)
  const Contract = {
    findAll: findAllStub,
  }
  const profile = {
    id: 4,
  }
  const actual = await listContracts(profile, Contract)
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
  t.deepEqual(actualOptions, expectedOptions, 'Should call listContracts with expected options')
  t.deepEqual(actual, listContractMock, 'Should return a contract object')
})