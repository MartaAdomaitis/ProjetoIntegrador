module.exports = (sequelize, dataTypes) => {

    const produto = sequelize.define(
        'Produto', 
        {
            // Model attributes are defined here
          id: {
            type: dataTypes.INTEGER,
            primaryKey: true
          },
          nome: {
            type: dataTypes.STRING
          },
          preco: {
            type: dataTypes.FLOAT
          }
         
        }, 
        {
            tableName: 'produto',
            timestamps: false
        }
    )
    Product.associate = (models) => {
      Product.belongsTo(models.ProductType, {
        as: 'category',
        foreignKey: 'product_type'
      })
    }

    Produto.associate = (models) => {
      Produto.belongsToMany(models.Store, {
        through: 'stores_produto',
        as: 'stores',
        foreignKey: 'id_produto',
        otherKey: 'id_store',
        timestamps: false
      })
    }


    return produto
}