const Sequelize = require("sequelize");
const sequelize = new Sequelize("projeto_integrador", "root", "",{
    host:'127.0.0.1',
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
})

//Testando a conexao
sequelize.authenticate().then(()=>{
    console.log("Conectado no banco com sucesso")
}).catch((err)=>{
 console.log("Falha ao se conectar: "+err)
})

module.exports = {Sequelize, sequelize};