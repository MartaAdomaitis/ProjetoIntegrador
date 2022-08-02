const db = require('../database/models/index');
const produto = require('../database/models/produto');

const listagemController = {
   // listagem: (req, res) => {
   // return res.render('detalhesProduto',{produto})
 //   },

    getAllListagem: async (req, res) => {  

        try {

            const getListagem = await db.produto.findAll();
            console.log(getListagem)
           // return res.render('detalhesProduto',{prod:getListagem})
           return res.send("ok")
            
        } catch (error) { console.log(error.message) }
    }
}

module.exports = listagemController;