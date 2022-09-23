
const { hasContracts } = require("../../validator")
const { listContracts } = require("../../repository")

const getContractsByProfile = async (profile, Contract) => {
  const result = await listContracts(profile, Contract)
  const contracts = hasContracts(result)
  return contracts
}

module.exports = getContractsByProfile;