var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var createError = require('http-errors');
var mysql = require('mysql')
var Database = require('../database.js')
// var connection = mysql.createConnection({
//   host: '35.232.83.9',
//   user: 'root',
//   password: 'dblab123',
//   database: 'maintTracker'
// })

var database = new Database();

//NEED TO CHECK IF USERNAME IS ALREADY IN TABLE, IF YES RETURN ERROR CODE TO DO NEW USERNAME, IF NO CONTINUE ADDING.
/* GET users listing. */
router.post('/', upload.array(), function(req, res, next) {
  database.query(`SELECT username FROM user_table WHERE username = '${req.body.username}';`)
  .then( rows => {
    if(rows.length != 0)
      next(createError(401));
    else {

      database.query(`INSERT INTO user_table (username,password,type,phone) VALUES ('${req.body.username}', '${req.body.password}','${req.body.type}','${req.body.phone}');`)
      .then(database.query(`SELECT user_id as id, type, username FROM user_table WHERE username = '${req.body.username}';`)
      .then(rows =>{
        res.send(rows[0]);
      }))
      .catch(err=> {
        console.log(err)
        res.send(err)
      })
    }
  }).catch(err =>{
    console.log(err);
    res.send(err)
  })

});

module.exports = router;
