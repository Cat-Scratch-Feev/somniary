const seedDreams = require('./dream-seeds');
const seedUsers = require('./user-seeds');
const seedTags = require('./tag-seeds');
const seedDreamsTags = require('./dream-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

    await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedDreams();
  console.log('\n----- DREAMS SEEDED -----\n');

  await seedDreamsTags();
  console.log('\n----- DREAM TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
