'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Envelope }) {
      // define association here
      this.belongsTo(Envelope, { foreignKey: 'envelopeId', as: 'envelopes' })
    }
  };
  Transaction.init({
    date: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.DATE
    },
    paymentAmount: DataTypes.STRING,
    paymentRecipient: DataTypes.STRING,
    envelopeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};