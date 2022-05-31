const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/index.js');


const app = express();

app.get("/", (req,res)=>{
  res.render ("index");
});

app.get("/carrinho", (req,res)=>{
  res.render ("carrinho");
});


app.get("/detalhesProduto", (req,res)=>{
  res.render ("detalhesProduto");
});

app.get("/home", (req,res)=>{
  res.render ("home");

});

app.get("/categoriasjogos", (req,res)=>{
  res.render ("categoriasjogos");
});

app.listen(3000, ()=>{
  console.log('server is running');
});

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.use( express.static( "public/img" ));
app.use( express.static( "public/css" ));
app.set('view engine', 'ejs');

module.exports = app;
