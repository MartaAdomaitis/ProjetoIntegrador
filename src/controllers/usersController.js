const fs = require('fs');
const path = require('path');
const db = require('../database/models/db');
const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const validarResultado = require ("express-validator")
const Usuario = require ("../database/models/usuario.js").Usuario
const Swal = require('sweetalert2')
const session = require("express-session")


const usersController = {
	index: (req, res) => {
		res.render('cadastro');
	},
	viewLogin: (req, res) => {
		res.render('login');
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
		res.redirect('/login');
	}).catch((err)=>{
console.log("Ops, houve um erro:" + err)
	})
},
	
login:  async (req, res) => {
	const {email} = req.body
	const senha = req.body.senha;
	console.log(senha)
		let user =  await Usuario.findOne({
			raw:true,	
		where:{	email: email, senha:senha}

   })  
   console.log(user)
//    console.log("Teste email primeiro " + user.email)
//    console.log("Teste senha primeiro" + user.senha)

//    let validacaoSenha = bcrypt.compareSync(senha, user.senha)

if(user) {

        res.redirect("/");
      }else{
		res.redirect("/login");
	  }

      req.session.user = user
   },

   alertaLogin: (req, res) => {
	res.render('alertaLogin');
},
	
	painel:(req, res) => {
		Usuario.findByPk(req.params.id)
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

 atualizar: (req, res) => {
	const nome = req.body.nome;
	const email = req.body.email;
	const senha = req.body.senha;
	const endereco = req.body.endereco;
	const telefone = req.body.telefone;

	let {id} = req.params.id
	console.log(id)
	const usuario = Usuario.findByPk(id)
	const atualização= (usuario)=>{
		const atualizacao = usuario.update({
			nome: nome,	
			})
	if(atualização != undefined){
		console.log("Atualizado com sucesso!");
		document.getElementById('Enviar').onclick = function(){
			swal('Boa!', 'Deu tudo certo!', 'success')
		  };
		res.redirect('/');	
	
	}else{
		console.log("Problema na atualização");
		document.getElementById('Enviar').onclick = function(){
			swal('Oh no...', 'Algo deu errado!', 'error')
		
		  };
		
	}
	

	}
 }
}

module.exports = usersController;