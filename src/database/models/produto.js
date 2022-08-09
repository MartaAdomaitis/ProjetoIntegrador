const db = require('./db');

    const Produto = db.sequelize.define('produto', {
            // Model attributes are defined here
          id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
          },
          nome: {
            type:db.Sequelize.STRING,
            allowNull: false},
          
          preco: {
            type: db.Sequelize.FLOAT,
            allowNull: false
          },
          description:{
            type: db.Sequelize.STRING
          }
         
        }, 
        {
            tableName: 'produto',
            timestamps: false
        },
    )
        Produto.sync();
    
    Produto.associate = (models) => {
      produto.belongsTo(models.ProductType, {
        as: 'category',
        foreignKey: 'product_type'
      })
    }

    Produto.associate = (models) => {
      produto.belongsToMany(models.Store, {
        through: 'stores_produto',
        as: 'stores',
        foreignKey: 'id_produto',
        otherKey: 'id_store',
        timestamps: false
      })
    }


    module.exports = {Produto};