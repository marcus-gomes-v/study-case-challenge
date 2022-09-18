const Sequelize = require('sequelize');
const { aContractStatus } = require('../shared');

class Contract extends Sequelize.Model {}

const setupContract = (sequelize) => {
  Contract.init(
    {
      terms: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM(...aContractStatus),
      },
    },
    {
      sequelize,
      modelName: 'Contract',
    },
  );

  return Contract;
};

module.exports = setupContract;
