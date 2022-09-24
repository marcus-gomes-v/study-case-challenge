const update = require('./update')
const find = require('./find')
const sum = require('./sum')

module.exports = {
    ...update,
    ...find,
    ...sum
}
