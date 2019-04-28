var express = require('express');
var router = express.Router();
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

// In REPAIR ROUTER
router.post('/add/:id', upload.array(), function(req, res, next){
  datebase.query(
    `INSERT INTO services(subject, text, date, car_id)
    VALUES ('${req.body.subject}', '${req.body.text}', '${req.body.date}', '${req.params.id}');`
  )
  .then(res.send("OK"))
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

module.exports = router;
