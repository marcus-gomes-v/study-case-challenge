const eHttpError = new Map([
  ['ClientNotFound', {
    message: 'No client has found for the requested ID',
    status: 412,
  }],
  ['InvalidAmount', {
    message: 'Maximum amount to deposit:',
    status: 422,
  }],
  ['ProblemToProcess', {
    message: 'The expect calculation could not be performed',
    status: 417,
  }],
  ['DepositIsNotValid', {
    message: 'Your deposit is not a valid number',
    status: 417,
  }],
  ['DepositIsPositive', {
    message: 'Your deposit must be a positive amount',
    status: 417,
  }],
  
]);

module.exports = (name) => eHttpError.get(name);
