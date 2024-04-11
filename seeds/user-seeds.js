const { User } = require('../models');

const userData =
  [
    {
      "username": "hermione.granger",
      "email": "hermione.granger@gmail.com",
      "password": "admin12345"
    },
    {
      "username": "harry.potter",
      "email": "harry.potter@hotmail.com",
      "password": "password12345"
    },
    {
      "username": "ron.weasley",
      "email": "ron.weasley@yahoo.com",
      "password": "1234pass"
    }
  ]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;