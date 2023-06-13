const { User } = require('../models');

const userData = [
  {
    email: 'Billybob08@gamil.com',
    password: 'billybobisdabest',
    username: 'Billy08',
  },
  {
    email: 'SillyDan44@AOL.com',
    password: 'Password1234',
    username: 'DantheMan',
  },
  {
    email: 'JenBridge@yahoo.com',
    password: 'bridgetown4455',
    username: 'JenBridge',
  },
  {
    email: 'ZimGeoff@gmail.com',
    password: 'zimwhimzimmim',
    username: 'Zim',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

