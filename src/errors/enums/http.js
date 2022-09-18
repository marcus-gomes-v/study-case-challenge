const eHttpError = new Map([
  ['ProfileNotFound', {
    message: 'No profile has found for the requested profile_id',
    status: 412,
  }],
]);

module.exports = (name) => eHttpError.get(name);
