const express = require('express');
const router = express.Router();
const multer = require("multer");

const carrinhoController = require('../controllers/carrinhoController');

router.get('/carrinho', carrinhoController.index); 
router.get("/finalizacaopedido", carrinhoController.payment);

module.exports = router;