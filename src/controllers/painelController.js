// const db = require('../database/models/index');
// const users = require('../database/models/produto');

// const updatepainelController = {
//     updatepainelUsuario: async(req, res) => {
//         const { id_usuario, email, senha} = req.body;
//         try {
//             const getupdatepainelController = await db.users.findAll({ id_usuario, email, senha })

//         } catch (error) {}
//             console.log("error")  
//         }


//     };

// module.exports = updatepainelController;

const fs = require('fs');
const path = require('path');

const painelFilePath = path.join(__dirname, '../data/usersDataBase.json');
const painel = JSON.parse(fs.readFileSync(painelFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const painelController = {
	index:(req, res) => {
		res.render('painel')
	},
    payment: (req, res) => {
		res.render("painelUsuario")
},
}

module.exports = painelController;

