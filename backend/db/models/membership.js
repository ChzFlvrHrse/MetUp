'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Membership.belongsTo(
        models.User,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      ),
      Membership.belongsTo(
        models.Group,
        { foreignKey: 'groupId', onDelete: 'CASCADE', hooks: true }
      )
    }
  }
  Membership.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
