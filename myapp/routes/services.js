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

//In SERVICES ROUTER
router.post('/add/:car_id', upload.array(), function(req, res, next){
  database.query(
    `INSERT INTO service_history_table(service_type, service_desc, date, car_id)
    VALUES ('${req.body.service_type}', '${req.body.service_desc}', CURDATE(), '${req.params.car_id}');`
  ).then((good, err)=>{
    if(err){
      res.statusCode(500).send();
    }
    res.sendStatus(200);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).send();
  })
});

module.exports = router;
