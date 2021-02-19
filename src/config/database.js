module.exports = {
    host: process.env.HOST_API,
    username: process.env.API_USER,
    password: process.env.API_PASS,
    dialect: process.env.API_DIALECT,
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}