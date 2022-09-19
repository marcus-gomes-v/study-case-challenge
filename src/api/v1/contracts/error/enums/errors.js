const eHttpError = new Map([
  ['ContractNotFound', {
    message: 'No contract has found',
    status: 404,
  }],
  ['NotContractsFound', {
    message: 'Profile has no active contracts',
    status: 404,
  }],
]);

module.exports = (name) => eHttpError.get(name);
