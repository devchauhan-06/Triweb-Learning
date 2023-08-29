const Sequelize = require('sequelize')
const sequelize = new Sequelize("workshop-2","root","dev@62003",{
    dialect : "mysql",
    host : "localhost",
    port : 3308
})



module.exports = sequelize;

