'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.sequelize.query('CREATE EXTENSION citext;')
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
