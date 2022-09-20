
const { hasContracts } = require("../../validator");
const { listContracts } = require("../../repository");

const getModel = (model) => model.Contract;

const sendResponse = (res, contract) => res.status(200).json(contract);

const getContractsByProfile = async (req, res, next) => {
  try {
    const model = req.app.get('models')
    const Contract = getModel(model)
    const { profile } = req;
    const result = await listContracts(profile, Contract)
    const contracts = hasContracts(result)

    sendResponse(res, contracts)
  } catch (error) {
    next(error);
  }
};

module.exports = getContractsByProfile;

module.exports.test = {
  sendResponse
};
