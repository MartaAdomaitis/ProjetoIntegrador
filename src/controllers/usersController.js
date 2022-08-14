const fs = require('fs');
const path = require('path');
const db = require('../database/models/db');
const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const passport = require("passport")
const Usuario = require ("../database/models/Usuario.js").Usuario
const auth = require('../database/config/auth')(passport);

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

	const criacao = Usuario.create({
	nome: nome,	
	email: email,
	senha: senha,
	endereco: endereco,
	telefone: telefone,
	cpf: cpf
	}).then(()=>{
		console.log("Cadastrado com sucesso!");
		res.redirect('/');
	}).catch((err)=>{
console.log("Ops, houve um erro:" + err)
	})
},
	
login:(req,res, next) => {
passport.authenticate('local',{
	successRedirect:"/painelusuario",
	failureRedirect:"/",
	failureFlash: true
})(req, res, next)
},
	painel:(req, res) => {
		res.render('painelUsuario');
	},

	allUsuario: ("/painelusuario", (req, res) => {
		Usuario.findAll().then((valores)=>{
			res.render("painelUsuario", {
				usuario: valores,
			})
		}).catch((err)=>{
console.log("Houve um erro: " + err);
res.render ("Houve um erro: " + err);
		})
	}),



};


module.exports = usersController;