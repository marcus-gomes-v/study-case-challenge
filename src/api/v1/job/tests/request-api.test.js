

const test = require('ava')
const request = require('supertest')
const app = require('../../../../server/app')

test('Success List Unpaid Jobs', async t => {
    const response = await request(app)
        .get('/api/v1/jobs/unpaid')
        .set({ profile_id: 2 })
    t.is(response.status, 200);
})

test('Error No Active Jobs', async t => {
    const response = await request(app)
        .get('/api/v1/jobs/unpaid')
        .set({ profile_id: 8 })
    t.is(response.status, 404);
    t.is(response.body.message, "Not active jobs");
})

test('Error Profile_id not found', async t => {
    const response = await request(app)
        .get('/api/v1/jobs/unpaid')
        .set({ profile_id: 12 })
    t.is(response.status, 412);
    t.is(response.body.message, "No profile has found for the requested profile_id");
})


test('Success Pay Job', async t => {
    const response = await request(app)
        .post('/api/v1/jobs/3/pay')
        .set({ profile_id: 2 })
    t.is(response.status, 200);
})


test('Error Job not exists', async t => {
    const response = await request(app)
        .post('/api/v1/jobs/5/pay')
        .set({ profile_id: 2 })
    t.is(response.status, 404);
    t.is(response.body.message, "Job does not exist");
})

test('Error Profile not exists', async t => {
    const response = await request(app)
        .post('/api/v1/jobs/4/pay')
        .set({ profile_id: 12 })
    t.is(response.status, 412);
    t.is(response.body.message, "No profile has found for the requested profile_id");
})

test('Error Job already paid', async t => {
    const response = await request(app)
        .post('/api/v1/jobs/8/pay')
        .set({ profile_id: 2 })
    t.is(response.status, 422);
    t.is(response.body.message, "Job was previously paid");
})
