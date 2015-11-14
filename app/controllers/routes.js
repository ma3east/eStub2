var express = require('express');
var router  = express.Router();
var db      = require('../../config/db');


router.use('/api/users', require('./users'));
router.use('/api/events', require('./events'));

// route to handle all angular requests
router.get('/', function(req, res) {
  // res.sendFile('./public/index.html');
  res.sendFile('index');
  });

module.exports = router;