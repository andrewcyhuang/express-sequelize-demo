'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Authors',
      [
        {
          name: 'Ernest Hemingway',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mark Twain',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jane Austen',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Authors', null, {});
  }
};
