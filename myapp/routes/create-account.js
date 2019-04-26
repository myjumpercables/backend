var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '35.232.83.9',
  user: 'root',
  password: 'dblab123',
  database: 'maintTracker'
})


/* GET users listing. */
router.post('/', function(req, res, next) {
  connection.connect()
  connection.query(`INSERT INTO user (username,password) VALUES ('${req.body.username}', '${req.body.password})`;);
  res.send('Created Account');
});

module.exports = router;
