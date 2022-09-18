const contractsErrors = require('../error')
const { throwCustomError } = require('../../../../errors/error-tools')
const NotContractsFoundError = contractsErrors('NotContractsFound')

const hasContracts = (result) => result.length > 0 ? result : throwCustomError(NotContractsFoundError)

exports.hasContracts = hasContracts
