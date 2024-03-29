const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const PORT = 3000;
const methodOverride = require("method-override")
const Swal = require('sweetalert2')

const rotaIndex = require('./src/routes/index');
const rotaProdutos = require('./src/routes/produto');
const rotaCarrinho = require('./src/routes/carrinho');
const rotaUsers = require('./src/routes/user');

const Usuario = require ("./src/database/models/usuario.js");
const app = express();
const db = require('./src/database/models/index');

//sessão
// criando 24 hours com milisegundos
const oneDay = 1000 * 60 * 60 * 24;

//sessão middleware
app.use(sessions({
  secret: "GAMEZONE",
  resave: false,
  saveUninitialized:true,
}));


// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}))

// cookie parser middleware
app.use(cookieParser());

app.use(methodOverride("_method"));
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


module.exports = app;

