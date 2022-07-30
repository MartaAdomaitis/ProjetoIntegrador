module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define('Pedido', {
               
        id_pedido:{
            type:DataType.INTEGER,
            primaryKey:true,
            auto_increment:true
        },
        
        status:{
            type:DataType.STRING,
            allowNull:false
        },
        
        fk_usuario:{
            type:DataType.INTEGER,
            allowNull:false,
        },    
    },
    {        
        tableName:'pedido',
        timestamps:false
    }
    )

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

    return Pedido
}