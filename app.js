const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const flash = require("connect-flash")
const passport = require("passport")
const auth = require('./src/database/config/auth')(passport);
const PORT = 3000;


const rotaIndex = require('./src/routes/index');
const rotaProdutos = require('./src/routes/produto');
const rotaCarrinho = require('./src/routes/carrinho');
const rotaUsers = require('./src/routes/user');

const Usuario = require ("./src/database/models/Usuario.js")
const app = express();
const db = require('./src/database/models/index')

//sessão
// criando 24 hours com milisegundos
const oneDay = 1000 * 60 * 60 * 24;

//sessão middleware
app.use(sessions({
  secret: "segredo",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: true
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//Middleware
app.use((req, res, next)=>{
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  next()
})

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}))

// cookie parser middleware
app.use(cookieParser());

app.use(rotaIndex);
app.use(rotaProdutos);
app.use(rotaCarrinho);
app.use(rotaUsers);

 app.get('/painelusuario',(req,res)=>{
  res.render("painelUsuario")
});


// app.get('/painelusuario',(req,res)=>{     // alteração para verificar qual usuario esta conectado
//   usuario.findByPk(1).then (usuario => {  // realizada no dia 08/08/2022 Amanda
//     console.log(usuario)
//   }).catch((error)=>{ 
//     console.log('Houve um erro:');
//   })
  
    
//   });


app.listen(3000, ()=>{
  console.log('Servidor ok!');
});

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.use( express.static( "public/css" ));
app.use( express.static( "public/img" ));

app.set('view engine', 'ejs');


module.exports = app;

