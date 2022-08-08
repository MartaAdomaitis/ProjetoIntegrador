const db = require('../database/models/index');
const users = require('../database/models/produto');

const updatepainelController = {
    updatepainelUsuario: async(req, res) => {
        const { id_usuario, email, senha} = req.body;
        try {
            const getupdatepainelController = await db.users.findAll({ id_usuario, email, senha })

        } catch (error) {}
            console.log("error")  
        }


    };

module.exports = updatepainelController;

