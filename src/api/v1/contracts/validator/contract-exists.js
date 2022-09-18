const contractsErrors = require('../error');
const { throwCustomError } = require('../../../../errors/error-tools');
const contractNotFoundError = contractsErrors('ContractNotFound');

const contractExists = (result) => (
  !result ? throwCustomError(contractNotFoundError) : result
);

exports.contractExists = contractExists;