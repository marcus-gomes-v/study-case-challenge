const test = require('ava')
const sinon = require('sinon')
const clientMock = require('./mocks/client.mock')

const {
  findClient,
} = require('../repository/find/client').test


test('#findClient() - Success retrieve a client data', async (t) => {
  const findOneStub = sinon.stub().returns(clientMock);
  const Profile = {
    findOne: findOneStub,
  }

  const clientId = 2

  const actual = await findClient(clientId, Profile);
  const actualOptions = findOneStub.getCall(0).args[0];
  const expectedOptions = {
    where: {
      id: 2,
      type: 'client',
    },
  }
  t.deepEqual(actualOptions, expectedOptions, 'Should call findClient with expected options')
  t.deepEqual(actual, clientMock, 'Should return a client object')
})