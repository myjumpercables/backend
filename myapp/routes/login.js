var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '35.232.83.9',
  user: 'root',
  password: 'dblab123',
  database: 'maintTracker'
})
connection.connect()

/* GET listing. */
//put upload.none() before function for multer

router.post('/', function(req, res, next) {
  console.log(req.body);
  //console.log(req.params.id);
  connection.query('SELECT * FROM user',(err,rows)=> {
    if(err) throw err;
    console.log('Data received form Db:\n');
    console.log(rows);

});
res.send(rows);
});

module.exports = router;
