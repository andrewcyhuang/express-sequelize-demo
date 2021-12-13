'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Kobe',
          lastName: 'Bryant',
          email: 'kobe@blackmamba.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Shaq',
          lastName: 'Diesel',
          email: 'shaq@bigcactus.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          firstName: 'Tim',
          lastName: 'Brown',
          email: 'tim@raiders.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {})
  }
};
