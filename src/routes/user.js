const express = require('express');
const router = express.Router();
const multer = require("multer");
const cadastroAuth = require('../middlewares/cadastroAuth');
const loginAuth = require('../middlewares/loginAuth');
const methodOverride = require("method-override")
const loggedUserMiddleware = require("../middlewares/loggedUserMiddleware")
const notLoggedUserMiddleware = require("../middlewares/notLoggedUserMiddleware")

const usersController = require('../controllers/usersController');
router.get('/cadastro', loggedUserMiddleware, cadastroAuth, usersController.index); 
router.get('/painelusuario', notLoggedUserMiddleware, usersController.painel);

router.post('/usuario/login', usersController.login);
router.put('/painelusuario/:id/update', usersController.atualizar);
router.get('/login', loggedUserMiddleware, loginAuth, usersController.viewLogin);  
router.get('/login/error', usersController.alertaLogin);
router.delete('/user/delete', usersController.delete)
router.get("/users/logout", usersController.logout)
//router.get('/findByPk/:id', usersController.findByPk)


//router.get('/find/:id', usersController.findOne)


// router.get('/search', usersController.search)


//router.get('/creat', usersController.creat)
//router.post('/creat', usersController.store)

router.post("/cad", usersController.create)
router.post("/cadastro", usersController.login)

//router.get('/editar/:id', usersController.edit)
//router.put('/editar/:id', usersController.update)


//router.delete('/delete/:id', usersController.destroy)

module.exports = router;