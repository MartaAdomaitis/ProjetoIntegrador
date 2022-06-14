const fs = require('fs');
const path = require('path');

const carrinhoFilePath = path.join(__dirname, '../data/carrinhoDataBase.json');
const carrinho = JSON.parse(fs.readFileSync(carrinhoFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const carrinhoController = {
	index:(req, res) => {
		res.render('carrinho')
	},
    payment: (req, res) => {
		res.render("finalizacaoPedido")
},
}

module.exports = carrinhoController;