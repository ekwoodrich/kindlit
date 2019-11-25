var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('api');
});
router.get('/book/send', function(req, res, next) {
  res.send('book');
});
router.post('/book/send', function(req, res, next) {
  res.send('book post');
});

module.exports = router;
