const { requirement } = require('./requirement')
const { request } = require('../../../../validator')
const getProfile = require('../../../../middleware/get-profile')

module.exports = {
    depositMiddleware: [
        getProfile,
        requirement,
        request,
    ]
}