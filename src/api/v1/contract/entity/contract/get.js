const { findContract } = require("../../repository")
const { contractExists } = require("../../validator")

const getContractById = async (params, profile, Contract) => {
  const result = await findContract(params, profile, Contract)
  const contract = contractExists(result)
  return contract
}

module.exports = getContractById