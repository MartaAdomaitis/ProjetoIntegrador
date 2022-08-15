const fs = require('fs');
const path = require('path');
const db = require('../database/models/db');
const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const Usuario = require ("../database/models/Usuario.js").Usuario
const {body} = require ("express-validator");
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
	const senha = bcrypt.hashSync(req.body.senha,10);
	const endereco = req.body.endereco;
	const telefone = req.body.telefone;
	const cpf = req.body.cpf;

	body("nome").notEmpty().withMessage('Digite o Nome').isString();
    body("email").notEmpty().withMessage('Digite Um Email').isEmail();
    body("senha").notEmpty().withMessage('Digite Uma Senha');

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
	
login: (req, res) => {
	res.render('cadastro');
	const emailUsuario = req.body.emailLogin;
	const senhaUsuario = req.body.senhaLogin;
	let user= Usuario

	body("email").notEmpty().withMessage('Digite Um Email Valido').isEmail();
    body("password").notEmpty().withMessage('Digite Uma Senha Valida');

	const senhaValida = (user, password) =>{
		return bcrypt.compareSync(password, user.password);
	}
	const loginUser = ()=>{if (!senhaValida) {
		return res.send("Senha Inválida")
}else{
	Usuario.findOne({	
		where:{	email: emailUsuario,}
   }).then((userinfo) => {
	res.redirect("/")
	res.send("Login realizado com sucesso")})
}
	//    req.session.Usuario = Usuario

	}},
	
		
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