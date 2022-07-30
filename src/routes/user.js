const express = require('express');
const router = express.Router();
const multer = require("multer");

const usersController = require('../controllers/usersController');
router.get('/cadastro', usersController.index); 
router.get('/painelusuario', usersController.painel);

//router.get('/findByPk/:id', usersController.findByPk)


//router.get('/find/:id', usersController.findOne)


router.get('/search', usersController.search)


//router.get('/creat', usersController.creat)
//router.post('/creat', usersController.store)


//router.get('/editar/:id', usersController.edit)
//router.put('/editar/:id', usersController.update)


//router.delete('/delete/:id', usersController.destroy)

module.exports = router;