var express = require('express');
var router = express.Router()
var Database = require('../database.js')
var multer = require('multer');
var upload = multer();
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: '35.232.83.9',
//   user: 'root',
//   password: 'dblab123',
//   database: 'maintTracker'
// })
var database = new Database();

// Manage Account Router
router.post('/:user_id', upload.array(), function(req, res, next) {
  database.query(
    `SELECT * from user_table WHERE user_id = ${req.params.user_id};`
  ).then(rows => {
    if(rows.length == 0){
      console.log({error: "Account Doesn't Exist"});
      res.sendStatus(500);
    }
    else {
      database.query(
        `UPDATE user_table
        SET
          username = ${req.body.username},
          password = ${req.body.password},
        WHERE user_id = ${req.params.user_id};`
      )
    }
  })
});

module.exports = router;
