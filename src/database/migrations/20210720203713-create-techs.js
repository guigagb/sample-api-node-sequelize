'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('techs', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.CITEXT,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        },
            {
                charset: 'utf8', /* i add this two ligne here for generate the table with collation  = 'utf8_general_ci' test it and tell me ? */
                collate: 'utf8_swedish_ci'
            }
        );

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.dropTable('techs');

    }
};
