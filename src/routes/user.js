const express = require('express');
const router = express.Router();
const multer = require("multer");

const usersController = require('../controllers/usersController');
router.get('/cadastro', usersController.index); 

module.exports = router;