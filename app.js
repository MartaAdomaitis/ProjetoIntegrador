const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/index.js');


const app = express();

app.get("/", (req,res)=>{
  res.render ("index");
});

app.get("/detalheproduto", (req,res)=>{
  res.render ("detalhesProduto");
});

app.listen(3000, ()=>{
  console.log('server is running');
});

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.use( express.static( "public/img" ));
app.set('view engine', 'ejs');

module.exports = app;
