'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(
        models.Group,
        { foreignKey: 'groupId' }
      ),
      Image.belongsTo(
        models.Event,
        { foreignKey: 'eventId' }
      )
    }
  }
  Image.init({
    groupId: {
      type: DataTypes.INTEGER
    },
    eventId: {
      type: DataTypes.INTEGER
    },
    imageableType: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Image',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  });
  return Image;
};
