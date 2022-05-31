const express = require('express');
const router = express.Router();
const multer = require("multer");
router.get('/', function(req, res, next) {
  res.render("../views/index.ejs");
});

module.exports = router;