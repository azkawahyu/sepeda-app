"use strict";
const { Model } = require("sequelize");
const sepeda = require("./sepeda");
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Sepeda, { as: "sepedas", foreignKey: "vendorId" });
    }
  }
  Vendor.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      establishYear: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vendor",
    },
  );
  return Vendor;
};
