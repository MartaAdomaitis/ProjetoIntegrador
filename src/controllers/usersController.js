const fs = require('fs');
const path = require('path');
const db = require('../database/models/db');
const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const Usuario = require ("../database/models/Usuario.js").Usuario

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
	
login: (req,res) => {
	const emailUsuario = req.body.emailLogin;
	const senhaUsuario = req.body.senhaLogin;
	const loginUser = Usuario.findOne({	where:{
	email: emailUsuario,}}, (err,Usuario)=>{
		if (err) {
			next(err);
	} else {
        if (bcrypt.compareSync(req.body.senhaLogin, Usuario.senha)) {
          const token = jwt.sign({ id: Usuario.id }, req.app.get('secretKey'), { expiresIn: '1h' });
          res.json({ status: "Sucesso", message: "Usuário encontrado!", data: { user: Usuario, token: token } });
        } else {
          res.json({ status: "error", message: "E-mail e senha inválidos", data: null });
        }
	}})
	.then((loginUser)=>{
		if (loginUser != null){
		console.log("Login realizado com sucesso!");
		res.redirect('/');}	else{
		res.redirect('/cadastro');	
		console.log("Usuário não cadastrado")
		}
	}).catch((err)=>{
		res.redirect('/cadastro');
console.log("Ops, houve um erro:" + err)
	})
},

	painel:(req, res) => {
		res.render('painelUsuario');
	},
};

module.exports = usersController;