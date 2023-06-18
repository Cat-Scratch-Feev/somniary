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
    username: 'JenBridge92',
  },
  {
    email: 'ZimGeoff@gmail.com',
    password: 'zimwhimzimmim',
    username: 'xXZimXx',
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
    email: 'BillGill@gmail.com',
    password: 'gboff123',
    username: 'GillyBill',
  },
  {
    email: 'FellowWellow@gmail.com',
    password: 'lightswitch',
    username: 'DimBlim2001',
  },
  {
    email: 'NatetheGreat@gmail.com',
    password: 'greatNate',
    username: 'NateTheGreat',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

