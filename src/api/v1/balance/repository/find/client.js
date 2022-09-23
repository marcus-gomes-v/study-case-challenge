const { throwCustomError } = require("../../../../../errors");
const { clientExists } = require('../../validator');

const findClient = async (ClientId, Profile, transaction) => {
  try{
    const client = await Profile.findOne({
        where: {
          id: ClientId,
          type: 'client',
        },
      },
      { transaction }
    );
    clientExists(client)
    return client;
  }  catch(error){
    throwCustomError(error)
  }
}

module.exports = findClient

module.exports.test = {
  findClient
}
