const db = require('../models/index');

const updatepainelController = {
    updatepainelUsuario: async(req, res) => {
        const { id_usuario, email, senha} = req.body;
        try {
            const updatepainelController = await dbpainelController.update({ id_usuario, email, senha })

        } catch (error) {}
            console.log("error")  
        }


    };

module.exports = updatepainelController;

