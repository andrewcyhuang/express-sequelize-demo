'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // define association here
    }

    toJSON() {
      return {...this.get(), id: undefined }
    }
  };
  Author.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'authors',
    modelName: 'Author',
  });
  return Author;
};