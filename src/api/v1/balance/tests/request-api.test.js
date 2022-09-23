const test = require('ava')
const request = require('supertest')
const app = require('../../../../server/app')

test('Success Deposit', async t => {
    const amount = 50
    const response = await request(app)
        .post('/api/v1/balances/deposit')
        .send({ amount })
        .set({ profile_id: 2 })
    t.is(response.status, 200);
})

test('Not Client Found to Deposit', async t => {
    const amount = 50
    const response = await request(app)
        .post('/api/v1/balances/deposit')
        .send({ amount })
        .set({ profile_id: 12 })
    t.is(response.status, 412);
    t.is(response.body.message, "No profile has found for the requested profile_id");
})

test('Not Number Deposit', async t => {
    const amount = "notNumber"
    const response = await request(app)
        .post('/api/v1/balances/deposit')
        .send({ amount })
        .set({ profile_id: 2 })
    t.is(response.status, 417);
    t.is(response.body.message, "Your deposit is not a valid number");
})

test('Not Positive Amount to Deposit', async t => {
    const amount = -100
    const response = await request(app)
        .post('/api/v1/balances/deposit')
        .send({ amount })
        .set({ profile_id: 2 })
    t.is(response.status, 417);
    t.is(response.body.message, "Your deposit must be a positive amount");
})

test('Not Possible Amount to Deposit', async t => {
    const amount = 200
    const response = await request(app)
        .post('/api/v1/balances/deposit')
        .send({ amount })
        .set({ profile_id: 2 })
    t.is(response.status, 422);
    t.is(response.body.message, "Maximum amount to deposit: $100.50");
})