const { throwCustomError } = require('../errors/error-tools');
const { eHttpError } = require('../errors');
const oProfileNotFoundError = eHttpError('ProfileNotFound');

const exists = result => !result ? throwCustomError(oProfileNotFoundError) : result

module.exports = {
    exists
};
