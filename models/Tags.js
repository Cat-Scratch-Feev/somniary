const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tags extends Model {}

Tags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'license',
      }
);

module.exports = Tags;