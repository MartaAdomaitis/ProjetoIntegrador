const db = require('../models/index');

const listagemController = {
    listagem: (req, res) => {
    return res.render('listagemProduto')
    },

    getAllListagem: async (req, res) => {  

        try {

            const getListagem = await db.Listagem.findAll();
            console.log(getListagem)
            
        } catch (error) { console.log(error.message) }
    }
}

module.exports = listagemProduto;