var express = require('express');
var router = express.Router();

router.post('/register', function(req, res, next) {
  res.status(200).send();
});

router.post('/login', function(req, res, next) {
  res.status(200).send();
});

router.post('/logout', function(req, res, next) {
  res.status(200).send();
});

module.exports = router;
