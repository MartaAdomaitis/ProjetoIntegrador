const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const rotaIndex = require('./src/routes/index');
const rotaProdutos = require('./src/routes/produto');
const rotaCarrinho = require('./src/routes/carrinho');
const rotaUsers = require('./src/routes/user');

const Usuario = require ("./src/database/models/Usuario.js")
const app = express();
const db = require('./src/database/models/index')

app.use(bodyParser.urlencoded({extended:false}))

app.use(rotaIndex);
app.use(rotaProdutos);
app.use(rotaCarrinho);
app.use(rotaUsers);

app.get('/painelusuario',(req,res)=>{
  res.render("painelUsuario")
});

app.listen(3000, ()=>{
  console.log('Servidor ok!');
});

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.use( express.static( "public/css" ));
app.use( express.static( "public/img" ));

app.set('view engine', 'ejs');

app.post('/cad', (req,res)=>{
  console.log(req.body.nome, );
});

module.exports = app;

