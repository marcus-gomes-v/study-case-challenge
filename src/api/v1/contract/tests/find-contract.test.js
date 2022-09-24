const test = require('ava')
const sinon = require('sinon')
const { Op } = require('sequelize')
const contractMock = require('./mocks/contract.mock')

const {
  findInProgressContract,
} = require('../repository/find/find-in-progress-contract').test


test('#findInProgressContract() - Success retrieve a contract data', async (t) => {
  const findOneStub = sinon.stub().returns(contractMock);
  const Contract = {
    findOne: findOneStub,
  }

  const params = {
    id: 7,
  }

  const profile = {
    id: 2,
  }

  const actual = await findInProgressContract(params, profile, Contract);
  const actualOptions = findOneStub.getCall(0).args[0];
  const expectedOptions = {
    where: {
      id: 7,
      [Op.or]: [
        { ContractorId: 2 },
        { ClientId: 2 },
      ],
    },
  }
  t.deepEqual(actualOptions, expectedOptions, 'Should call findInProgressContract with expected options')
  t.deepEqual(actual, contractMock, 'Should return a contract object')
})
