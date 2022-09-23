const jobsErrors = require('../error');
const ErrorProcessingTransaction = jobsErrors('ErrorProcessingTransaction');
const { throwCustomError } = require('../../../../errors');

const transactionProcessing = (result) => result.length > 0 ? result : throwCustomError(ErrorProcessingTransaction);

module.exports = transactionProcessing;