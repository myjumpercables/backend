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
router.post('/add/:service_id', upload.array(), function(req, res, next){
  database.query(
    `INSERT INTO repair_table(repair_type, repair_desc, cost, date, service_id)
    VALUES ('${req.body.repair_type}', '${req.body.repair_desc}','${req.body.cost}', '${req.body.date}', '${req.params.service_id}');`
  )
  .then(res.send("OK"))
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

module.exports = router;
