const express = require('express');
const router = express.Router();
const multer = require("multer");

const homeController = require('../controllers/indexController');

router.get('/', (req, res) => {
        res.render("../views/index.ejs");
    });

module.exports = router;