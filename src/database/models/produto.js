module.exports = (sequelize, dataTypes) => {

    const produto = sequelize.define(
        'Produto', 
        {
            // Model attributes are defined here
          id: {
            type: dataTypes.INTEGER,
            primaryKey: true
          },
          name: {
            type: dataTypes.STRING
          },
          price: {
            type: dataTypes.FLOAT
          },
          description:{
            type: dataTypes.STRING
          }
         
        }, 
        {
            tableName: 'produto',
            timestamps: false
        }
    )
    produto.associate = (models) => {
      produto.belongsTo(models.ProductType, {
        as: 'category',
        foreignKey: 'product_type'
      })
    }

    produto.associate = (models) => {
      produto.belongsToMany(models.Store, {
        through: 'stores_produto',
        as: 'stores',
        foreignKey: 'id_produto',
        otherKey: 'id_store',
        timestamps: false
      })
    }


    return produto
}