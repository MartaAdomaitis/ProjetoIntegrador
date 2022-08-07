const db = require('./db');

    const Usuario = db.sequelize.define('usuario', {
       
        id:{
            type:db.Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
       
        nome: {
            type:db.Sequelize.STRING,
            allowNull: false},
        
        email:{
            type:db.Sequelize.STRING,
            allowNull: false},

        endereco:{
             type:db.Sequelize.STRING,
             allowNull: false},
        
        cpf:{
        type:db.Sequelize.INTEGER,
        allowNull: false},

        telefone:{
            type:db.Sequelize.INTEGER,
            allowNull: false,},
        
        senha: {type: db.Sequelize.STRING,
            allowNull: false,}
    },{
        
        tableName:'usuario',
        timestamps:false
    })

    Usuario.sync();
    
    Usuario.associate= (models) => {
        Usuario.hasMany(models.Pedido, {
            foreignKey: 'fk_usuario',
            as: 'pedidos'
        })
    }

    module.exports = {Usuario};
