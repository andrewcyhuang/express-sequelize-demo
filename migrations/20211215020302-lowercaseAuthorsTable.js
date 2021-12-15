'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Authors', 'authors');
    await queryInterface.changeColumn('authors', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('authors', 'Authors');
    await queryInterface.changeColumn('Authors', 'name', {
      type: Sequelize.STRING
    });
  }
};
