const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');

const app = express();

app.get("./", (req,res)=>{
  return (indexRouter);
});
app.listen(3000, ()=>{
  console.log('server is running');
});

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

module.exports = app;
