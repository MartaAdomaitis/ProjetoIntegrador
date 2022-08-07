const fs = require('fs');
const path = require('path');
const Produto = require ("../database/models/Produto.js")


const productsFilePath = path.join(__dirname, '../data/produtoDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
	// Root - Show all products
	index: (req, res) => {
		res.render('categoriasjogos', {
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
	const id = req.params.id
		const product = products.find(product => product.id == id)
		res.render("detalhesProduto", {
			productDetail: product,

		})
	
	},

	// allProduct - Detail from one product
	allProducts: ("/home", (req, res) => {
		Produto.findAll().then((valores)=>{
			res.render("home", {
				valores,
			})
		}).catch((err)=>{
console.log("Houve um erro: ${err}");
		})
	}),
	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: 'default-image.png'
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id
		const productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', {productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id;
		const productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const id = req.params.id;
		const finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
};

module.exports = productsController;
