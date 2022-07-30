const db = require('../models/index');

const updatepainelUsuario = {
    updatepainelUsuario: async(req, res) => {
        const { id_usuario, email, senha} = req.body;
        try {
            const updatepainelUsuario = await dbpainelUsuario.update({ id_usuario, email, senha })

        } catch (error) {}
            console.log("error")  
        }


    };

module.exports = updatepainelUsuario;

