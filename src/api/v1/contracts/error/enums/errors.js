const errors = new Map([
  ['ContractNotFound', {
    message: 'No contract has found',
    status: 404,
  }],
  ['NotContractsFound', {
    message: 'Profile has no active contracts',
    status: 404,
  }],
]);

module.exports = (name) => errors.get(name);
