const test = require('ava')
const sinon = require('sinon')
const contractorMock = require('./mocks/contractor.mock')

const {
  findContractor,
} = require('../repository/find/contractor').test


test('#findContractor() - Success retrieve a contract data', async (t) => {
  const findOneStub = sinon.stub().returns(contractorMock);
  const Profile = {
    findOne: findOneStub,
  }
  const contractorId = 2
  const actual = await findContractor(contractorId, Profile);
  const actualOptions = findOneStub.getCall(0).args[0];
  const expectedOptions = {
    where: { 
      id: 2
    },
  }
  t.deepEqual(actualOptions, expectedOptions, 'Should call findContractor with expected options')
  t.deepEqual(actual, contractorMock, 'Should return a contractor object')
})