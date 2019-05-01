var express = require('express');
var router = express.Router();
var Database = require('../database.js')
var multer = require('multer');
var upload = multer();

var database = new Database();

/* GET users listing. */
router.get('/details/:id', upload.array(), function(req, res, next) {
  //connection.connect()
  database.query(
    `SELECT username, email, phone, location, description
    FROM user_table
    WHERE user_id = ${req.params.id}`
  )
  .then((rows, err) =>{
    if (err) throw err;
    res.send(rows[0]);
  })
  .catch(err =>{
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
