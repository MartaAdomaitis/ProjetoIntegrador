const express = require('express');
const router = express.Router();
const multer = require("multer");
const productsController = require ("../controllers/productsController")
const homeController = require('../controllers/indexController');

router.get('/', productsController.allProducts);

module.exports = router;