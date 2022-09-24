
const { hasContracts } = require("../../validator")
const { listInProgressContracts } = require("../../repository")

const listActiveContracts = async (profile, { Contract }) => {
  const listOfInProgressContracts = await listInProgressContracts(profile, Contract)
  const listOfActiveContracts = hasContracts(listOfInProgressContracts)
  return listOfActiveContracts
}

module.exports = listActiveContracts;
