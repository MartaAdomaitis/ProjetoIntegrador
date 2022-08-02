const express = require('express');
const router = express.Router();
const multer = require("multer");

// ************ Controller Require ***********
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get("/detalhesProduto", productsController.detail);
router.get("/categoriaProduto", productsController.index)

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detalhesProduto/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
