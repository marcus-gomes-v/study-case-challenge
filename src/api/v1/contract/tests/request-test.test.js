const test = require('ava')
const request = require('supertest')
const app = require('../../../../server/app')

test('Success Get Contract list', async t => {
    const response = await request(app)
        .get('/api/v1/contracts')
        .set({ profile_id: 2 })
    t.is(response.status, 200)
})

test('Error Get Contract list, has not Active Contracts', async t => {
    const response = await request(app)
        .get('/api/v1/contracts')
        .set({ profile_id: 5 })
    t.is(response.status, 404)
})

test('Error Get Contract list, Profile Not Exists', async t => {
    const response = await request(app)
        .get('/api/v1/contracts')
        .set({ profile_id: 12 })
    t.is(response.status, 412)
})


test('Success Get Contract By ID', async t => {
    const contractId = 3
    const response = await request(app)
        .get(`/api/v1/contracts/${contractId}`)
        .set({ profile_id: 2 })
    t.is(response.status, 200)
})


test('Error Get Contract By ID - No Contract Found', async t => {
    const contractId = 6
    const response = await request(app)
        .get(`/api/v1/contracts/${contractId}`)
        .set({ profile_id: 2 })
    t.is(response.status, 404)
})


test('Error Get Contract By ID - No Profile Found', async t => {
    const contractId = 6
    const response = await request(app)
        .get(`/api/v1/contracts/${contractId}`)
        .set({ profile_id: 12 })
    t.is(response.status, 412)
})


