var express = require('express');
var router = express.Router()
var Database = require('../database.js')
var multer = require('multer');
var upload = multer();
var database = new Database();

// Manage Account Router
router.post('/:user_id', upload.array(), function(req, res, next) {
  database.query(
    `SELECT * FROM user_table WHERE user_id = '${req.params.user_id}' AND password = '${req.body.password}';`
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
          password = ${req.body.new_password},
        WHERE user_id = ${req.params.user_id};`
      ).then((rows,err)=>{
        if(err) throw err;
        res.send(rows);
      })

    }
  }).catch(err =>{
    console.log(err);
    res.statusCode(500);
  })
});

module.exports = router;
