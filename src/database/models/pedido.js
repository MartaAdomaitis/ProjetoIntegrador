const db = require('./db');

    const Pedido = db.sequelize.define('pedido', {
               
        id:{
            type:db.Sequelize.INTEGER,
            primaryKey:true,
            auto_increment:true,
            allowNull: false
        },
        
        status:{
            type:db.Sequelize.STRING,
            allowNull:false
        },
        
        fk_usuario:{
            type:db.Sequelize.INTEGER,
            allowNull:false,
        },    
    },
    {        
        tableName:'pedido',
        timestamps:false
    }
    )

    Pedido.sync();
    Pedido.associate = (models) => {
        Pedido.belongsTo(modelsUsuario, {
            foreignKey: 'fk_usuario',
            as: 'usuario'
            })
        
        Pedido.belongsToMany(modelsProduto, {
            foreignKey: 'fk_produto',
            as: 'itensPedido',
            through: modelsItemPedido
            })
    }

    module.exports = {Pedido};
