const test = require('ava')
const request = require('supertest')
const app = require('../../../../server/app')

test('Success Get Best Professions', async t => {
    const start = "2020-06-10"
    const end = "2020-08-14"
    const response = await request(app)
        .get('/api/v1/admin/best-profession')
        .query({ start, end })
    t.is(response.status, 200);
    t.is(response.body.profession,"Musician");
    t.is(response.body.total, 21);
})

test('Error Get Best Professions Wrong Date', async t => {
    const start = "2020--10"
    const end = "2020-08-14"
    const response = await request(app)
        .get('/api/v1/admin/best-profession')
        .query({ start, end })
    t.is(response.status, 400);
   
})

test('Success Get Best Clients', async t => {
    const start = "2020-06-10"
    const end = "2020-08-14"
    const response = await request(app)
        .get('/api/v1/admin/best-clients')
        .query({ start, end })
    t.is(response.status, 200);
})

test('Error Get Best Clients Wrong Date', async t => {
    const start = "2020--10"
    const end = "2020-08-14"
    const response = await request(app)
        .get('/api/v1/admin/best-clients')
        .query({ start, end })
    t.is(response.status, 400);

})
