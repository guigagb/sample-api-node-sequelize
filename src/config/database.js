module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'testegui',
    database: 'sqlnode',
    define: {
        timestamps: true,
        underscored: true,
        charset: 'utf8',
        dialectOptions: { collate: "utf8_swedish_ci" }
    }
}