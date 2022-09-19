const findContractor = (ContractorId, Profile) => Profile.findOne({ where: { id: ContractorId } })

module.exports = findContractor