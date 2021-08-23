'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envelope extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Transaction }) {
      // define association here
    }
  };
  Envelope.init({
    category: DataTypes.STRING,
    totalAmount: DataTypes.INTEGER,
    spendingLimit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Envelope',
  });
  return Envelope;
};