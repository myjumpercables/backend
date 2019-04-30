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

router.get('/:company_id', upload.array(), function(req, res, next){
    database.query(
      `SELECT user_id, username FROM request_table JOIN user_table
       ON request_table.user_id = user_table.user_id
       WHERE request.company_id = ${req.params.company_id} AND state = NULL;`
    )
    .then(rows => {
      res.send(rows)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).send();
    })
  });

module.exports = router;
