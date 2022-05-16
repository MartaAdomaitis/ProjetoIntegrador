const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render("../views/index.ejs");
});

module.exports = router;