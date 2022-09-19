const { throwCustomError } = require('../../../../errors');
const balanceErrors = require('../error');

const InvalidAmountError = balanceErrors('InvalidAmount');
const maximumDepositPercentage = 0.25;

const getMaxDepositAmount = (totalJobAmount) => totalJobAmount * maximumDepositPercentage;

const exceedsAllowedAmount = (amount, maxAmount) => (
  amount > maxAmount
);

const geErrorMessage = ({ message }, maxAmount) => `${message} ${maxAmount.toLocaleString("en-US", { style: "currency", currency: "USD" }) }`;

const canDeposit = ( totalJobAmount, depositAmount) => {
  const maxAmount = getMaxDepositAmount(totalJobAmount);

  if (exceedsAllowedAmount(depositAmount, maxAmount)) {
    throwCustomError({
      ...InvalidAmountError,
      message: geErrorMessage(InvalidAmountError, maxAmount),
    });
  }
};

exports.canDeposit = canDeposit;
