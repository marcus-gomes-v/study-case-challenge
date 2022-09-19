const balanceErrors = require('../error');
const ClientNotFoundError = balanceErrors('ClientNotFound');
const { throwCustomError } = require('../../../../errors');

const clientExists = (result) => !result ? throwCustomError(ClientNotFoundError) : result

exports.clientExists = clientExists;
