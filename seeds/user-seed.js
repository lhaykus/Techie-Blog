const { User } = require('../models');

const userData = [
    {
        username: 'warrior25',
        email: 'user@user.com',
        password: 'password',
    },
    {
        username: 'wizard23',
        email: 'wizard@yahoo.com',
        password: 'password2',
    },
    {
        username: 'dragon21',
        email: 'dragon@dragon.com',
        password: 'password3',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
