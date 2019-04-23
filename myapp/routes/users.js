var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '35.232.83.9',
  user: 'root',
  password: 'dblab123',
  database: 'maintTracker'
})

connection.connect()
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
