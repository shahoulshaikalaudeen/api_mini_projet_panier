'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  produits.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    produit: DataTypes.STRING(255),
    image: DataTypes.TEXT,
    description: DataTypes.JSON,
    prix: DataTypes.STRING(255),
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'produits',
    underscored: true,
  });
  return produits;
};