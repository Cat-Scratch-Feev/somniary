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
  {
    email: 'Phil@gmail.com',
    password: 'philbilljillwill',
    username: 'Philberrydoughboy',
  },
  {
    email: 'Wibbly@gmail.com',
    password: '635283768',
    username: 'WibblyWobbly',
  },
  {
    email: 'PlorpBlorp@gmail.com',
    password: 'plorpblorp',
    username: 'PB',
  },
  {
    email: 'Bill@gmail.com',
    password: 'zimwhimzimmim',
    username: 'Zim',
  },
  {
    email: 'ZimGeoff@gmail.com',
    password: 'zimwhimzimmim',
    username: 'Zim',
  },
  {
    email: 'NatetheGreat@gmail.com',
    password: 'greatNate',
    username: 'NateTheGreat',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

