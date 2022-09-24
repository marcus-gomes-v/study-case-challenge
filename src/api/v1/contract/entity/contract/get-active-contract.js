const { findInProgressContract } = require("../../repository")
const { contractExists } = require("../../validator")

const getActiveContract = async (params, profile, { Contract }) => {
  const inProgressContract = await findInProgressContract(params, profile, Contract)
  const activeContract = contractExists(inProgressContract)
  return activeContract
}

module.exports = getActiveContract
