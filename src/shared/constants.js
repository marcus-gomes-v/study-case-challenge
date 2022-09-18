const iDefaultProfileId = 0

const oContractStatus = {
  NEW: 'new', 
  IN_PROGRESS: 'in_progress', 
  TERMINATED: 'terminated'
}
const aContractStatus = [
  oContractStatus.NEW,
  oContractStatus.IN_PROGRESS,
  oContractStatus.TERMINATED
]
const aProfileTypes = ['client', 'contractor']

module.exports = {
  aContractStatus,
  aProfileTypes,
  oContractStatus,
  iDefaultProfileId
}