'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sepeda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sepeda.belongsTo(models.Vendor,{as : "vendor",foreignKey :"vendorId"}) // telling that this sepeda connect to vendor dengan fk : vendorId
    }
  };
  Sepeda.init({
    vendorId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    gambar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sepeda',
  });
  return Sepeda;
};