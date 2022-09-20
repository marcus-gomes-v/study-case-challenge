const findContractor = async (ContractorId, Profile) => {
    try{
        const contractor = await Profile.findOne({ where: { id: ContractorId } })
        return contractor
    } catch(e){
        throw(e)
    }
}

module.exports = findContractor

module.exports.test = {
    findContractor
}