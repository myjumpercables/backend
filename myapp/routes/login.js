var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var createError = require('http-errors');
var mysql = require('mysql')
var Database = require('../database')
var connection = mysql.createConnection({
  host: '35.232.83.9',
  user: 'root',
  password: 'dblab123',
  database: 'maintTracker'
})
connection.connect()

//var database = new Database();

/* GET listing. */
//put upload.none() before function for multer

router.post('/', upload.array(), function(req, res, next) {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  //console.log(req.params.id);
  connection.query(`SELECT user_id as id, type, username FROM user_table WHERE username = '${req.body.username}' AND password = '${req.body.password}';`,(err,rows)=> {
    if(err) throw err;
    if (rows.length === 0) {
        next(createError(401));
        console.log('ERROR');
        }
    else{
      console.log('Data received form Db:');
      console.log(rows);
      res.send(rows[0]);
    }
});

});

module.exports = router;
