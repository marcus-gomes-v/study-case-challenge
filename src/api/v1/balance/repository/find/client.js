const balanceErrors = require('../../error')
const ErrorClientNotFound = balanceErrors('ClientNotFound')
const { throwCustomError } = require("../../../../../errors");

const findClient = async (ClientId, Profile) => {
  try{
    const client = await Profile.findOne({
      where: {
        id: ClientId,
        type: 'client',
      },
    });
    return client;
  }  catch(error){
    throwCustomError(ErrorClientNotFound)
  }
}

module.exports = findClient

module.exports.test = {
  findClient
}
