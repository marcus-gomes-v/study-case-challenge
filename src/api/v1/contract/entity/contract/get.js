const { findContract } = require("../../repository");
const { contractExists } = require("../../validator");

const getModel = (model) => model.Contract;

const sendResponse = (res, contract) => res.status(200).json(contract);

const getContractById = async (req, res, next) => {
  try {
    const model = req.app.get('models');
    const Contract = getModel(model);
    const { params, profile } = req;
    const result = await findContract(params, profile, Contract);
    const contract = contractExists(result);
    sendResponse(res, contract);
  } catch (error) {
    next(error);
  }
};

module.exports = getContractById;