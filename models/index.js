// import models
const User = require('./User');
const Dream = require('./Dream');
const Tags = require('./Tags');
const DreamTags = require('./DreamTags');

// Dream belongsTo Products
Dream.belongsTo(User, {
  foreignKey: 'user_id',
});
// User have many Dreams
User.hasMany(Dream, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// Dream belongToMany Tags (through DreamTags)
Dream.belongsToMany(Tags, { through: DreamTags });
// Tags belongToMany Dreams (through DreamTags)
Tags.belongsToMany(Dream, { through: DreamTags });

module.exports = {
  User,
  Dream,
  Tags,
  DreamTags,
};