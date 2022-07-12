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
        Pedido.belongsTo(models.Usuario, {
            foreignKey: 'fk_usuario',
            as: 'usuario'
            })
        
        Pedido.belongsToMany(models.Produto, {
            foreignKey: 'fk_produto',
            as: 'itensPedido',
            through: models.ItemPedido
            })
    }

    return Pedido
}