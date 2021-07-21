'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('user_techs', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            tech_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'techs', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
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

        await queryInterface.dropTable('user_techs');

    }
};
