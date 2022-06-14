const express = require('express');
const path = require('path');

const rotaIndex = require('./src/routes/index');
const rotaProdutos = require('./src/routes/produtos');
const rotaCarrinho = require('./src/routes/carrinho');
const rotaUsers = require('./src/routes/user');

const app = express();

app.use(rotaIndex);
app.use(rotaProdutos);
app.use(rotaCarrinho);
app.use(rotaUsers);

app.listen(3000, ()=>{
  console.log('server is running');
});

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.use( express.static( "public/img" ));
app.use( express.static( "public/css" ));
app.set('view engine', 'ejs');

module.exports = app;
