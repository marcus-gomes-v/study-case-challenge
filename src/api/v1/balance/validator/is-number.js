const balanceErrors = require('../error');
const DepositIsNotValid = balanceErrors('DepositIsNotValid');
const { throwCustomError } = require('../../../../errors');

const depositIsANumber = (depositAmount) => (isNaN(depositAmount)) ? throwCustomError(DepositIsNotValid) : depositAmount

exports.depositIsANumber = depositIsANumber;