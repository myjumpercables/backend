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
  console.log(req.body);
  database.query(
    `SELECT * 
    FROM user_table 
    WHERE user_id = '${req.params.user_id}
    AND password ='${req.body.password}';`
  ).then((rows, err) => {
    if (err) throw err;
    if(rows.length == 0){
      console.log({error: "Account Doesn't Exist"});
      res.sendStatus(403);
    }
    else {
      database.query(
        `UPDATE user_table
        SET
          username = '${req.body.username}',
          phone = ${req.body.phone},
          location = '${req.body.location}',
          email = '${req.body.email}',
          description = '${req.body.description}'
        WHERE user_id = ${req.params.user_id};`
      ).then((resp,err)=>{
        if(err) throw err;
        res.send(rows);
      })
      .catch(err=>{
        console.log(err)
        res.sendStatus(500);
      })
    }
  })
});

module.exports = router;
