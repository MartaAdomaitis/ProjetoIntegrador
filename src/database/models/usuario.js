module.exports = (sequelize, DataType) => {
   
    const Usuario = sequelize.define('Usuario', {
       
        id_usuario:{
            type:DataType.INTEGER,
            primaryKey:true,
            auto_increment:true
        },
       
        nome: DataType.STRING,
        
        email:{
            type:DataType.STRING,
            allowNull:true,
        },
        
        senha: DataType.STRING
    },{
        
        tableName:'usuario',
        timestamps:false
    })

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Pedido, {
            foreignKey: 'fk_usuario',
            as: 'pedidos'
        })
    }

    return Usuario
}