const test = require('ava')
const sinon = require('sinon')
const depositMock = require('./mocks/deposit.mock')

const {
  sendResponse,
} = require('../entity/balance/deposit').test

const resFactory = (sandbox) => {
  const res = {
    status() { return this; },
    json: () => {},
  }

  sandbox.spy(res, 'status')
  sandbox.spy(res, 'json')
  return res
}

test('#sendResponse() - Send a response json', (t) => {
  const deposit = { ...depositMock }
  const res = resFactory(sinon)

  sendResponse(res, deposit)
  t.true(res.status.calledOnceWithExactly(200), 'Should set 200 status to the response')
  t.true(res.json.calledOnceWithExactly(deposit), 'Should call json with the deposit data')
});
