const balanceErrors = require('../error');
const DepositIsPositive = balanceErrors('DepositIsPositive');
const { throwCustomError } = require('../../../../errors');

const isPositive = (depositAmount) => ( depositAmount < 0 ) ? throwCustomError(DepositIsPositive) : depositAmount

exports.isPositive = isPositive;