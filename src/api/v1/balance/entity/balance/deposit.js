
const { canDeposit, clientExists } = require('../../validator');
const { updateClientBalance, sumActiveJobs, findClient } = require("../../repository");

const getModels = (req) => req.app.get('models');

const sendResponse = (res) => res.status(200).json({ message: 'The deposit was made' });

const deposit = async (req, res, next) => {
  try {
    const { profile } = req;
    const { amount } = req.body
    const { Profile, Job, Contract } = getModels(req)

    const client = await findClient(profile.id, Profile);
    clientExists(client);
    const { dataValues: { totalJobAmount } } = await sumActiveJobs(client, Job, Contract);

    canDeposit(totalJobAmount, amount);
    await updateClientBalance(client.id, amount, Profile);

    sendResponse(res);
  } catch (error) {
    next(error);
  }
};

module.exports = deposit;
