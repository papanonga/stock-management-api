'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    project_name: DataTypes.STRING,
    serial_number: DataTypes.STRING,
    borrower: DataTypes.STRING,
    borrower_date: DataTypes.DATE,
    back_to_store_date: DataTypes.DATE,
    status_equipment_back: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'history',
    underscored: true,
    freezeTableName: true,
    underscoreAll: true,
    createdAt: "created_at",
    updateAt: "updated_at"
  });
  return History;
};