const express = require('express');
const path = require('path');

const rotaIndex = require('./src/routes/index');
const rotaProdutos = require('./src/routes/produto');
const rotaCarrinho = require('./src/routes/carrinho');
const rotaUsers = require('./src/routes/user');

const app = express();
const db = require('./models/index')

app.use(rotaIndex);
app.use(rotaProdutos);
app.use(rotaCarrinho);
app.use(rotaUsers);

app.get('/painelusuario',(req,res)=>{
  res.render("painelUsuario")
});

app.get('/listaproduto', (_, res) => {
  console.log('db', db.produto);
  res.send('Hello world')
})

app.get('/produto', async (_, res) => { 
  try {
      const products = await db.Product.findAll();
       return res.send(products)
  } catch(error) {
   res.send('Deu algum BO na busca');
  }
})

app.listen(3000, ()=>{
  console.log('server is running');
});

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.use( express.static( "public/img" ));
app.use( express.static( "public/css" ));
app.set('view engine', 'ejs');

module.exports = app;
