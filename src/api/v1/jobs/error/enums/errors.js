const eHttpError = new Map([
  ['NotActiveJobsFound', {
    message: 'Not active jobs',
    status: 404,
  }],
  ['JobNotFound', {
    message: 'Job does not exist',
    status: 404,
  }],
  ['JobAlreadyPaid', {
    message: 'Job was previously paid',
    status: 422,
  }],
  ['NoSufficientFunds', {
    message: 'Insufficient founds to process the payment',
    status: 422,
  }],
  ['ErrorProcessingTransaction', {
    message: 'Unexpected error during payment process',
    status: 422,
  }],
]);

module.exports = (name) => eHttpError.get(name);
