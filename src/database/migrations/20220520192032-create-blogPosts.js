'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: Sequelize.DATE,
      updated: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
