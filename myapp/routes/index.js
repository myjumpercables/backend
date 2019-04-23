var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '35.232.83.9',
  user: 'root',
  password: 'dblab123',
  database: 'maintTracker'
})


/* GET home page. */
router.get('/', function(req, res, next) {
  connection.connect()
  connection.query('SELECT 1 + 1 AS solution', function  (err, rows, fields){
    console.log('The solution is: ',rows[0].solution)
    res.send(200).send({solution : rows[0].solution});
  })
});

module.exports = router;
