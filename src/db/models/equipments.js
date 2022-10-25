'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Equipments.init({
    item_name: DataTypes.STRING,
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    serial_number: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    borrower: DataTypes.STRING,
    project_name: DataTypes.STRING,
    pv_number: DataTypes.STRING,
    po_number: DataTypes.STRING,
    locate_at: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'equipments',
    underscored: true,
    freezeTableName: true,
    underscoreAll: true,
    createdAt: "created_at",
    updateAt: "updated_at"
  });
  return Equipments;
};