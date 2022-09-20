const test = require('ava')
const sinon = require('sinon')
const updatedClientBalanceMock = require('./mocks/updated-client-balance.mock')

const {
  updateClientBalance,
} = require('../repository/update/client-balance').test


test('#updateClientBalance() - Success retrieve a client data', async (t) => {
  const incrementStub = sinon.stub().returns(updatedClientBalanceMock);
  const Profile = {
    increment: incrementStub,
  }

  const id = 2
  const amount = 50

  const actual = await updateClientBalance(id, amount, Profile);
  const actualOptions = incrementStub.getCall(0).args[0];
  const expectedOptions = {
      balance: 50
  }
  t.deepEqual(actualOptions, expectedOptions, 'Should call updateClientBalance with expected options')
  t.deepEqual(actual, updatedClientBalanceMock, 'Should return a updated client object')
})