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

		let user =  await Usuario.findOne({
			raw:true,	
		where:{	email: email, senha:senha}

   })  
  
//    console.log("Teste email primeiro " + user.email)
//    console.log("Teste senha primeiro" + user.senha)

//    let validacaoSenha = bcrypt.compareSync(senha, user.senha)

if(user) {
	delete user.senha;
    req.session.userLogged = user;

        res.redirect("/painelusuario");
      }else{
		res.redirect("/login");
	  }
	  console.log(req.session)
    
   },

   alertaLogin: (req, res) => {
	res.render('alertaLogin');
},
	
	painel:(req, res) => {
		res.render('painelUsuario',{
		userLogged: req.session.userLogged})
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

 atualizar: async (req, res) => {
	const nome = req.body.nome;
	const email = req.body.email;
	const senha = req.body.senha;
	const endereco = req.body.endereco;
	const telefone = req.body.telefone;

	let {id} = req.session.userLogged
	console.log(id)
const usuario = await Usuario.findByPk(id)
	console.log(usuario)
		try{
			await usuario.update({
				nome: nome
			}
			)
			return res.redirect("/painelusuario")
		}
			catch(err){
				console.log(err)
				return res.redirect("/painelusuario")
			}

	

	},
	delete: async (req, res) => {
		let {id} = req.session.userLogged

const usuario = await Usuario.findByPk(id)
try{
	await usuario.destroy(
	)
	req.session.destroy()
	return res.redirect("/")
}
	catch(err){
		console.log(err)
		return res.redirect("/")
	}

	}
 }


module.exports = usersController;