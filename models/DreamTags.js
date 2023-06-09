const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Dream = require('./Dream');
const Tags = require('./Tags');

class DreamTags extends Model {}

DreamTags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        dream_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'dream',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tags',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dreamtags',
      }
);

module.exports = DreamTags;