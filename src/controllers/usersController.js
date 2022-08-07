const fs = require('fs');
const path = require('path');
const db = require('../database/models/db');
const express = require('express');
const bodyParser = require("body-parser");

const Usuario = require ("../database/models/Usuario.js")

const productsFilePath = path.join(__dirname, '../data/produtoDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visited = products.filter(function(product){
	return product.category == 'visited'
})
const inSale = products.filter(function(product){
	return product.category == 'in-sale'
})
const usersController = {
	index: (req, res) => {
		res.render('cadastro');
	},
	create: (req,res) => {
	const nome = req.body.nome;
	const email = req.body.email;
	const senha = req.body.senha;
	const endereco = req.body.endereco;
	const telefone = req.body.telefone;
	const cpf = req.body.cpf;

	Usuario.create({
	nome: nome,	
	email: email,
	senha: senha,
	endereco: endereco,
	}).then(()=>{
		console.log("Cadastrado com sucesso!");
		req.session.sucess = true
		return res.redirect('/painelusuario');
	}).catch((err)=>{
console.log("Ops, houve um erro: ${err}")
	})
},
	search: (req, res) => {
		const search = req.query.keywords;
		const productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
		res.render('results', { 
			products: productsToSearch, 
			search,
			toThousand,
		});
	},
	painel:(req, res) => {
		res.render('painelUsuario');
	},
};

module.exports = usersController;