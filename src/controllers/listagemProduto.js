const db = require('../models/index');

const listagemProduto = {
    Produto: (req, res) => {
    return res.render('listagemProduto')
    },

    getAllProdutos: async (req, res) => {  

        try {

            const getProdutos = await db.Produto.findAll();
            console.log(getProdutos)
            
        } catch (error) { console.log(error.message) }
    }
}

module.exports = listagemProduto;